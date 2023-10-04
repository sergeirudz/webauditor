import { PlaywrightCrawler } from 'crawlee'
import playwright, {Page} from 'playwright'
import fs from 'fs';
import path from 'path';
import { router } from './routes'
import {playAudit} from "playwright-lighthouse";
import lighthouseDesktopConfig from "lighthouse/core/config/lr-desktop-config";

const STORAGE_DIR = './storage/datasets/default'

interface FileObject {
	title: string
	url: string
}

const startUrls = ['https://abipolitseinik.ee']

const crawler = new PlaywrightCrawler({
	requestHandler: router
})

// await crawler.run(startUrls)

fs.readdir(STORAGE_DIR, async (err, files) => {
	if (err) {
		console.error(`Error reading directory: ${err}`)
		return
	}

	for (const file of files) {
		const filePath = path.join(STORAGE_DIR, file)

		const data = fs.readFileSync(filePath, 'utf8')

		const fileObject: FileObject = JSON.parse(data)
		console.log(`Title: ${fileObject.title}, Url: ${fileObject.url}`)

		const browser = await playwright['chromium'].launch({
			args: ['--remote-debugging-port=9222']
		})
		const page = await browser.newPage()
		await page.goto(fileObject.url)

		const report = await getReport(page)
		console.log(report.audits.metrics)

		await browser.close()
	}
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
					json: true,
					html: true,
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
}
