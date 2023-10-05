<template>
	<!-- Component: Navbar with Avatar -->
	<!-- Header -->
	<header class="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
		<div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
			<nav aria-label="main navigation" class="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
				<!-- Brand logo -->
				<NuxtLink id="WindUI" aria-label="WindUI logo" aria-current="page" class="flex items-center gap-2 py-3 text-blue-600 text-lg whitespace-nowrap focus:outline-none lg:flex-1" to="/">
					<svg width="100" viewBox="0 0 350 211.92642787709582" preserveAspectRatio="xMidYMid meet"><defs id="SvgjsDefs1001"></defs><g id="SvgjsG1007" transform="matrix(2.9166666666666665,0,0,2.9166666666666665,105,0)" fill="currentColor"><g xmlns="http://www.w3.org/2000/svg"><path d="M36,10.5L23.7,22.8c-0.4,0.4-0.4,1.1,0,1.5c0.4,0.4,1.1,0.4,1.5,0L37.5,12l3.7,0.5L48,5.7L43,5l-0.7-5l-6.9,6.9L36,10.5z"></path><path d="M42,14.5c1.5,2.8,2.4,6,2.4,9.5c0,11.2-9.1,20.3-20.3,20.3C12.8,44.3,3.7,35.2,3.7,24C3.7,12.8,12.8,3.7,24,3.7   c3.4,0,6.6,0.8,9.5,2.3l2.7-2.7C32.6,1.2,28.4,0,24,0C10.8,0,0,10.8,0,24c0,13.2,10.8,24,24,24c13.2,0,24-10.8,24-24   c0-4.4-1.2-8.6-3.3-12.2L42,14.5z"></path><path d="M33.4,10.3c-2.7-1.9-5.9-2.9-9.4-2.9C14.8,7.4,7.4,14.8,7.4,24c0,9.2,7.4,16.6,16.6,16.6S40.6,33.2,40.6,24   c0-3.5-1.1-6.7-2.9-9.4L35,17.3c1.2,2,1.9,4.3,1.9,6.7c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9   c0-7.1,5.8-12.9,12.9-12.9c2.5,0,4.8,0.7,6.7,1.9L33.4,10.3z"></path><path d="M24,18.5c0.4,0,0.8,0,1.1,0.1l2.9-2.9c-1.2-0.6-2.6-0.9-4-0.9c-5.1,0-9.2,4.1-9.2,9.2s4.1,9.2,9.2,9.2s9.2-4.1,9.2-9.2   c0-1.4-0.3-2.8-0.9-4l-2.9,2.9c0,0,0,0,0,0c0.1,0.4,0.1,0.7,0.1,1.1c0,3.1-2.5,5.5-5.5,5.5c-3.1,0-5.5-2.5-5.5-5.5   C18.5,20.9,20.9,18.5,24,18.5z"></path></g></g><g id="SvgjsG1008" featurekey="nameFeature-0" transform="matrix(1.8105446449749565,0,0,1.8105446449749565,-1.0863274776529446,138.8528431741679)" fill="currentColor"><path d="M12.96 40 l-1.56 -14.92 l-0.08 0 l-1.56 14.92 l-6.04 0 l-3.12 -28 l4.28 0 l2.32 22.08 l0.08 0 l2.08 -22.08 l4.24 0 l2.16 22.24 l0.08 0 l2.24 -22.24 l3.84 0 l-3.12 28 l-5.84 0 z M32.848 16 l0 7.8 l6.04 0 l0 4 l-6.04 0 l0 8.2 l7.6 0 l0 4 l-12 0 l0 -28 l12 0 l0 4 l-7.6 0 z M54.136 12 c4.56 0 6.52 2.12 6.52 6.44 l0 1 c0 2.88 -0.88 4.68 -2.84 5.6 l0 0.08 c2.36 0.92 3.28 3 3.28 5.96 l0 2.28 c0 4.32 -2.28 6.64 -6.68 6.64 l-6.92 0 l0 -28 l6.64 0 z M53.856 27.4 l-1.96 0 l0 8.6 l2.52 0 c1.48 0 2.28 -0.68 2.28 -2.76 l0 -2.44 c0 -2.6 -0.84 -3.4 -2.84 -3.4 z M54.016 16 l-2.12 0 l0 7.4 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -1.56 c0 -2 -0.68 -2.88 -2.24 -2.88 z M77.824 12 l4.48 28 l-4.44 0 l-0.76 -5.08 l-5.4 0 l-0.76 5.08 l-4.04 0 l4.48 -28 l6.44 0 z M74.344 16.96 l-2.08 14.16 l4.24 0 l-2.08 -14.16 l-0.08 0 z M88.47200000000001 12 l4.4 0 l0 21.6 c0 2 0.88 2.72 2.28 2.72 s2.28 -0.72 2.28 -2.72 l0 -21.6 l4.16 0 l0 21.32 c0 4.48 -2.24 7.04 -6.56 7.04 s-6.56 -2.56 -6.56 -7.04 l0 -21.32 z M108.92 40 l0 -28 l6.96 0 c4.4 0 6.56 2.44 6.56 6.92 l0 14.16 c0 4.48 -2.16 6.92 -6.56 6.92 l-6.96 0 z M115.80000000000001 16 l-2.48 0 l0 20 l2.48 0 c1.4 0 2.24 -0.72 2.24 -2.72 l0 -14.56 c0 -2 -0.84 -2.72 -2.24 -2.72 z M129.568 40 l0 -28 l4.4 0 l0 28 l-4.4 0 z M140.216 16 l0 -4 l13.6 0 l0 4 l-4.6 0 l0 24 l-4.4 0 l0 -24 l-4.6 0 z M164.104 18.44 l0 15.12 c0 2 0.88 2.76 2.28 2.76 s2.28 -0.76 2.28 -2.76 l0 -15.12 c0 -2 -0.88 -2.76 -2.28 -2.76 s-2.28 0.76 -2.28 2.76 z M159.70400000000004 33.28 l0 -14.56 c0 -4.48 2.36 -7.04 6.68 -7.04 s6.68 2.56 6.68 7.04 l0 14.56 c0 4.48 -2.36 7.04 -6.68 7.04 s-6.68 -2.56 -6.68 -7.04 z M193.91200000000003 40 l-4.48 0 c-0.24 -0.72 -0.4 -1.16 -0.4 -3.44 l0 -4.4 c0 -2.6 -0.88 -3.56 -2.88 -3.56 l-1.52 0 l0 11.4 l-4.4 0 l0 -28 l6.64 0 c4.56 0 6.52 2.12 6.52 6.44 l0 2.2 c0 2.88 -0.92 4.72 -2.88 5.64 l0 0.08 c2.2 0.92 2.92 3 2.92 5.92 l0 4.32 c0 1.36 0.04 2.36 0.48 3.4 z M186.75200000000004 16 l-2.12 0 l0 8.6 l1.72 0 c1.64 0 2.64 -0.72 2.64 -2.96 l0 -2.76 c0 -2 -0.68 -2.88 -2.24 -2.88 z"></path></g></svg>
				</NuxtLink>
				<!-- Mobile trigger -->
				<button class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
					<div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
						<span aria-hidden="true" class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
						<span aria-hidden="true" class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
						<span aria-hidden="true" class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
					</div>
				</button>
				<!-- Navigation links -->
				<ul role="menubar" aria-label="Select page" class="mr-4 invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
					<li role="none" class="flex items-stretch">
						<NuxtLink role="menuitem" aria-haspopup="false" class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8" to="/results"> <span>Auditeerimise tulemused</span></NuxtLink>
					</li>
				</ul>
				<div class="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
					<!-- Avatar -->
					<a href="#" class="relative inline-flex items-center justify-center w-10 h-10 text-white rounded-full">
						<img src="https://i.pravatar.cc/40?img=35" alt="user name" title="user name" width="40" height="40" class="max-w-full rounded-full" />
					</a>
					<!-- End Avatar -->
				</div>
			</nav>
		</div>
	</header>
	<!-- End Navbar with Avatar-->
</template>
