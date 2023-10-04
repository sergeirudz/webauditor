import { createPlaywrightRouter } from 'crawlee';
import { Page } from 'playwright'

export const router = createPlaywrightRouter();

router.addDefaultHandler(async ({ enqueueLinks, log }) => {
	log.info(`enqueueing new URLs`);
	await enqueueLinks({
		globs: ['https://www.abipolitseinik.ee/**'],
		label: 'detail',
	})
})

router.addHandler('detail', async ({ request, page, log, pushData }) => {
	const url = request.loadedUrl
	const title = await page.title();
	log.info(`${title}`, { url });

	await pushData({
		url: request.loadedUrl,
		title
	})
})

async function getScripts(page: Page, url: string | undefined) {
	const data = []
	const scripts = await page.locator('script');
	const count = await scripts.count();
	const origin = new URL(url ?? '').origin

	for (let i = 0; i < count; i++) {
		const script = await scripts.nth(i)
		let src = await script.getAttribute('src')

		if (src) {
			if (src.startsWith('//')) {
				src = origin + src.replace('//', '/')
			} else if (!src.startsWith('/')) {
				src = origin + '/' + src
			} else if (src.startsWith('/')) {
				src = origin + src
			}

			const fetched = await fetch(src).then((response) => response.text());
			data.push({ src, data: fetched })
		} else {
			const inline = await script.textContent()
			// TODO handle inline script - generate hash for filename
		}
	}

	// return data
}

// 	const scripts = await page.locator('script').(elements) => {
// 		return elements.map((element) => {
// 			if (element.src) {
// 				return fetch(element.src).then((response) => response.text());
// 			} else {
// 				return element.textContent;
// 			}
// 		})
// 	})
// }
