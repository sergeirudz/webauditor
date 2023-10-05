import cron from 'node-cron'
import playwright, {Page} from 'playwright'
import {playAudit} from 'playwright-lighthouse'
import lighthouseDesktopConfig from 'lighthouse/core/config/lr-desktop-config'
import {createClient} from "@supabase/supabase-js";

export default defineNitroPlugin(async () => {
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

		console.info('Running auditor task...')

		// Query queued pages
		const { data: queuedPage, error} = await supabaseClient
			.from('pages')
			.select('id, url')
			.is('performance', null)
			.order('created_at', { ascending: true })
			.limit(1)
			.single()

		if (!queuedPage) {
			running = false
			return
		}

		try {
			const browser = await playwright['chromium'].launch({
				args: ['--remote-debugging-port=9222']
			})
			const page = await browser.newPage()
			await page.goto(queuedPage.url)

			const report = await getReport(page)
			// console.log(queuedPage.url, report.audits.metrics)

			await browser.close()

			const performance = (report.categories?.performance?.score ?? 0) * 100
			const accessibility = (report.categories?.accessibility?.score ?? 0) * 100
			const bestPractices = (report.categories?.['best-practices']?.score ?? 0) * 100
			const seo = (report.categories?.seo?.score ?? 0) * 100
			const pwa = (report.categories?.pwa?.score ?? 0) * 100

			// Update page
			const { data, error } = await supabaseClient
				.from('pages')
				.update({performance: performance, accessibility: accessibility, best_practices: bestPractices, seo: seo, pwa: pwa})
				.eq('id', queuedPage.id)

			// TODO update scan status when all pages are processed
		} catch (e) {
			console.error((e as Error).message)
		}

		console.info('Auditor task completed.')
		running = false
	})
})

async function getReport(page: Page) {
	try {
		const { report } = await playAudit({
			page,
			config: lighthouseDesktopConfig,
			thresholds: {
				performance: 100,
				accessibility: 100,
				'best-practices': 100,
				seo: 100,
				pwa: 100,
			},
			reports: {
				formats: {
					json: false,
					html: false,
					csv: false
				}
			},
			ignoreError: true,
			port: 9222
		})
		return JSON.parse(report)
	} catch (e) {
		console.log((e as Error).message)
	}
	return {}
}
