import cron from 'node-cron'
import {createPlaywrightRouter, PlaywrightCrawler} from 'crawlee'
import {createClient, SupabaseClient} from '@supabase/supabase-js'

export default defineNitroPlugin(async (def) => {
	const {
		supabase: { url, key, cookieName },
	} = useRuntimeConfig().public

	const supabaseClient = createClient(url, key, {
		auth: {
			detectSessionInUrl: false,
			persistSession: false,
			autoRefreshToken: false,
		},
	})

	let running = false

	cron.schedule('*/5 * * * * *', async () => {
		if (running) return
		running = true

		console.info('Running crawler task...')

		// Query queued scans
		const { data: queuedScan} = await supabaseClient
			.from('scans')
			.select('id, websites_id, status, original_url')
			.eq('status', 'QUEUED')
			.order('created_at', { ascending: true })
			.limit(1)
			.single()

		if (!queuedScan) {
			running = false
			return
		}

		try {
			// Update scan status to CRAWLING
			await supabaseClient
				.from('scans')
				.update({status: 'CRAWLING'})
				.eq('id', queuedScan.id)

			await startCrawler(queuedScan.original_url, queuedScan.id, supabaseClient)

			// Update scan status to PROCESSING
			await supabaseClient
				.from('scans')
				.update({status: 'PROCESSING'})
				.eq('id', queuedScan.id)
		} catch (e) {
			console.error(e)
		}

		console.info('Crawler task completed.')

		running = false
	})
})

async function startCrawler(url: string, scanId: number, supabaseClient: SupabaseClient) {
	console.info('Starting crawler...')
	const router = createPlaywrightRouter();

	router.addDefaultHandler(async ({ enqueueLinks, log }) => {
		log.info(`enqueueing new URLs`);
		// TODO correctly handle direct page URLs - currently they are not crawled
		const glob = `${url.replace(/\/$/g, '')}/**`

		await enqueueLinks({
			globs: [glob],
			label: 'detail',
		})
	})

	router.addHandler('detail', async ({ request, page, log, pushData }) => {
		const url = request.loadedUrl
		const title = await page.title();
		log.info(`${title}`, { url });

		// Insert pages
		// TODO add support for continuing crawl
		// TODO add some kind of state for error handling?
		try {
			await supabaseClient
				.from('pages')
				.insert({
					scans_id: scanId,
					title: title,
					url: request.loadedUrl
				})
		} catch (e) {
			console.error('Error inserting page:', (e as Error).message)
		}
	})

	console.info('Crawling: ' + url)

	const crawler = new PlaywrightCrawler({
		requestHandler: router
	})

	await crawler.run([url])
}