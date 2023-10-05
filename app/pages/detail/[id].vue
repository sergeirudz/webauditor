<template>
	<div class="relative py-8 px-4 mx-auto w-full max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
		<div class="flex items-center mb-8">
			<h1 class="text-4xl tracking-tight leading-none text-gray-900 flex-1">google.com</h1>
			<span class="text-lg text-gray-600">12.12.2023 12:12:12</span>
		</div>
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
			<tr class="bg-white border-b hover:bg-gray-50">
				<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					Le Googel
				</th>
				<td class="px-6 py-4">
					https://www.google.com
				</td>
				<td class="px-6 py-4">
					0.88
				</td>
				<td class="px-6 py-4">
					0.87
				</td>
				<td class="px-6 py-4">
					0.86
				</td>
				<td class="px-6 py-4">
					0.85
				</td>
				<td class="px-6 py-4">
					0.84
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
</script>