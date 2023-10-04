import { createPlaywrightRouter } from 'crawlee';
import { playAudit } from 'playwright-lighthouse'

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

	await playAudit({
		page,
		thresholds: {
			performance: 50,
			accessibility: 50,
			'best-practices': 50,
			seo: 50,
			pwa: 50,
		},
		port: 9222
	})

	await pushData({
		url: request.loadedUrl,
		title
	})
})
