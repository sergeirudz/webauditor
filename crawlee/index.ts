// For more information, see https://crawlee.dev/
import { PlaywrightCrawler, ProxyConfiguration } from 'crawlee';

import { router } from './routes';

const startUrls = ['https://abipolitseinik.ee'];

const crawler = new PlaywrightCrawler({
	launchContext: {
		launchOptions: {
			args: ['--remote-debugging-port=9222']
		}
	},
	requestHandler: router,
});

await crawler.run(startUrls);
