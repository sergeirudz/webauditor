<template>
	<section class="flex flex-1 items-center bg-white bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
		<div class="flex flex-col items-center pt-8 py-8 mb-24 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
			<h1 class="mb-8 mx-auto max-w-screen-md text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tõsta oma veebilehe kvaliteet uuele tasemele.</h1>
			<p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Sisesta veebilehe aadress mida soovid kontrollida ning meie toome välja kõik jõudluse ja kasutajakogemusega seotud probleemid.</p>
			<form class="w-full max-w-md mx-auto" @submit.prevent="audit">
				<label for="website" class="mb-2 text-sm font-medium text-gray-900 sr-only">Email sign-up</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
						<svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></svg>
					</div>
					<input v-model="website" type="text" id="website" class="block w-full py-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Sisesta veebilehe aadress..." autocomplete="false" required>
					<button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Auditeeri</button>
				</div>
			</form>
		</div>
		<div class="bg-gradient-to-b from-blue-50 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
	</section>
</template>

<script setup lang="ts">
const router = useRouter()

const website = ref<string>('')

async function audit() {
	const res = await $fetch<{ success: boolean; data: { id: number } }>(`http://localhost:3000/api/scan`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: {
			website: website.value
		}
	})

	if (res.success) {
		return router.push(`/detail/${res.data.id}`)
	}
}
</script>
