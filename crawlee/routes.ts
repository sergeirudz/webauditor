import { createPlaywrightRouter } from 'crawlee';
import { playAudit } from 'playwright-lighthouse'
import lighthouseDesktopConfig from 'lighthouse/core/config/lr-desktop-config'

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
	log.info(`enqueueing new URLs`);
	await enqueueLinks({
		globs: ['https://www.abipolitseinik.ee/**'],
		label: 'detail',
	})
})

router.addHandler('detail', async ({ request, page, log, pushData }) => {
	const title = await page.title();
	log.info(`${title}`, { url: request.loadedUrl });

	try {
		await playAudit({
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
					json: true, //defaults to false
					html: true, //defaults to false
					csv: false
				}
				// name: `name-of-the-report`, //defaults to `lighthouse-${new Date().getTime()}`
				// directory: `path/to/directory`, //defaults to `${process.cwd()}/lighthouse`
			},
			port: 9222
		})
	} catch (e) {
		console.error('Caught error', e)
	}

	await pushData({
		url: request.loadedUrl,
		title
	})
})
