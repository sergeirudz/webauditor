<template>
	<div class="relative py-8 px-4 mx-auto w-full max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
		<h1 class="mb-8 text-4xl tracking-tight leading-none text-gray-900">Minu veebisaidid</h1>
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
				       placeholder="Otsi veebisaite">
			</div>
			<div>
				<button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
				        class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5"
				        type="button">
					<svg class="w-3 h-3 text-gray-500 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
					     fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
					</svg>
					Viimased 30 päeva
					<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
					     viewBox="0 0 10 6">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						      d="m1 1 4 4 4-4"/>
					</svg>
				</button>
				<!-- Dropdown menu -->
				<div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
				     data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
				     style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
					<ul class="p-3 space-y-1 text-sm text-gray-700" aria-labelledby="dropdownRadioButton">
						<li>
							<div class="flex items-center p-2 rounded hover:bg-gray-100">
								<input id="filter-radio-example-3" type="radio" value="" name="filter-radio"
								       class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
								<label for="filter-radio-example-3" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Viimased
									30 päeva</label>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<table class="w-full text-sm text-left text-gray-500 border border-solid">
			<thead class="text-xs text-gray-700 uppercase bg-gray-200">
			<tr>
				<th scope="col" class="px-6 py-3">
					Veebisait
				</th>
				<th scope="col" class="px-6 py-3">
					Auditeeritud veebilehti
				</th>
				<th scope="col" class="px-6 py-3">
					Tuvastatud probleeme
				</th>
				<th scope="col" class="px-6 py-3">
					Kuupäev
				</th>
				<th scope="col" class="px-6 py-3"></th>
			</tr>
			</thead>
			<tbody>
			<tr class="bg-white border-b hover:bg-gray-50">
				<th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
					google.com
				</th>
				<td class="px-6 py-4">
					1250 / 6500
				</td>
				<td class="px-6 py-4">
					<span class="text-yellow-600">12</span>
				</td>
				<td class="px-6 py-4">
					12.12.2023 12:12:12
				</td>
				<td class="px-6 py-2 text-right">
					<button type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">Auditeeri uuesti</button>
					<NuxtLink class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 focus:outline-none" to="/detail/1">Tulemused</NuxtLink>
				</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
</script>