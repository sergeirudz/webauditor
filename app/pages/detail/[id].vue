<template>
	<div class="relative py-8 px-4 mx-auto w-full max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
		<div class="flex items-center mb-3">
			<h1 class="text-4xl tracking-tight leading-none text-gray-900 flex items-center flex-1">
				{{ scan.websites.host }}
				<span
					class="inline-flex items-center justify-center gap-1 rounded px-1.5 ml-3 text-sm text-white"
					:class="{'bg-gray-500': scan.status === 'QUEUED', 'bg-yellow-500': scan.status === 'CRAWLING', 'bg-blue-500': scan.status === 'PROCESSING', 'bg-emerald-500': scan.status === 'COMPLETED'}"
				>
				  {{ scan.status }}
				  <span class="sr-only"> {{ scan.status }}</span>
				</span>
			</h1>
			<span class="text-lg text-gray-600">{{ scan.created_at }}</span>
		</div>
		<p class="mb-8 text-sm">
			<span class="font-bold mr-1 text-gray-600">Auditeerimisele edastatud aadress:</span>
			<span><a class="text-blue-700" :href="scan.original_url">{{ scan.original_url }}</a></span>
		</p>
		<div class="flex items-center justify-between pb-4">
			<label for="table-search" class="sr-only">Otsing</label>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
					     xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd"
						      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						      clip-rule="evenodd"></path>
					</svg>
				</div>
				<input type="text" id="table-search"
				       class="block p-2 pl-10 text-sm rounded-lg w-80 bg-gray-50 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
				       placeholder="Otsi veebilehti">
			</div>
		</div>
		<table class="w-full text-sm text-left text-gray-500 border border-solid">
			<thead class="text-xs text-gray-700 uppercase bg-gray-200">
			<tr>
				<th scope="col" class="px-6 py-3">
					Pealkiri
				</th>
				<th scope="col" class="px-6 py-3">
					URL
				</th>
				<th scope="col" class="px-6 py-3">
					Jõudlus
				</th>
				<th scope="col" class="px-6 py-3">
					Ligipääsetavus
				</th>
				<th scope="col" class="px-6 py-3">
					Parimad praktikad
				</th>
				<th scope="col" class="px-6 py-3">
					SEO
				</th>
				<th scope="col" class="px-6 py-3">
					PWA
				</th>
				<th scope="col" class="px-6 py-3 w-12"></th>
			</tr>
			</thead>
			<tbody>
			<tr
				v-for="page in scan.pages"
				class="bg-white border-b hover:bg-gray-50"
			>
				<th scope="row" class="px-6 py-4 font-medium text-gray-900">
					{{ page.title }}
				</th>
				<td class="px-6 py-4">
					{{ page.url }}
				</td>
				<td class="px-6 py-4">
					{{ page.performance ?? '-' }}
				</td>
				<td class="px-6 py-4">
					{{ page.accessibility ?? '-' }}
				</td>
				<td class="px-6 py-4">
					{{ page.best_practices ?? '-' }}
				</td>
				<td class="px-6 py-4">
					{{ page.seo ?? '-' }}
				</td>
				<td class="px-6 py-4">
					{{ page.pwa ?? '-' }}
				</td>
				<td class="px-6 py-2">
					<NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none" to="/detail/1">Raport</NuxtLink>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const route = useRoute()

const { data: scan } = await useAsyncData('data', async () => {
	const { data } = await client
		.from('scans')
		.select('created_at, status, original_url, websites!inner(host), pages(title, url, performance, accessibility, best_practices, seo, pwa)')
		.eq('id', route.params.id)
		.single()
	return data
})
</script>