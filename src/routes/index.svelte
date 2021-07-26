<script>
	import { slide } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import SvelteTooltip from 'svelte-tooltip';
	import { toast } from '@zerodevx/svelte-toast';
	import Prism from 'prismjs';

	import Card from '../components/Card.svelte';
	import fragments from '../utils/fragments.js';
	import CopyToClipboard from '../utils/copyToClipboard.svelte';

	let categories = [
		{ name: 'Cards', checked: false },
		{ name: 'Forms', checked: false },
		{ name: 'Buttons', checked: true },
		{ name: 'Modals', checked: false },
		{ name: 'Sidebar', checked: false },
		{ name: 'Navbar', checked: false }
	];

	let isCode = false;
</script>

<div class="h-screen">
	<div class="bg-salmon-light h-5/6">
		<div class="container py-8 h-full">
			<!-- Header -->
			<div class="flex justify-end">
				<a class="text-purpled-dark hover:text-opacity-75" href="https://tailwindcss.com/"
					>What is Tailwind?</a
				>
				<a class="ml-16 text-purpled-dark hover:text-opacity-75" href="#usage">Usage</a>
				<a class="ml-16 text-purpled-dark hover:text-opacity-75" href="#fragments">Fragments</a>
			</div>

			<!-- Hero -->
			<div class="flex justify-between items-center h-full">
				<div class="flex flex-col">
					<h1 class="font-bold text-6xl mb-4 text-purpled-dark">
						Fragmen<span class="text-salmon-dark">tail</span>s
					</h1>
					<p class="text-purpled mb-8 text-2xl">Responsive Tailwind CSS components</p>
					<a href="#fragments">
						<button
							class="py-2 px-6 border-2 border-salmon-dark text-salmon-dark rounded-lg w-36 hover:text-white hover:bg-salmon-dark"
						>
							Explore
						</button>
					</a>
				</div>
				<img src="/assets/images/hero_image.svg" alt="Hero" />
			</div>

			<!-- Cards -->
			<div id="usage" class="relative bottom-10">
				<div class="flex justify-around">
					<Card
						icon="fa fa-code"
						title="Minimal"
						content="Fragments are designed with simplicity in mind"
					/>
					<Card
						icon="fa fa-mobile"
						title="Responsive"
						content="Keep your website beautiful anywhere"
					/>
					<Card
						icon="fa fa-moon-o"
						title="Dark mode"
						content="Take care of your eyes when it’s dark"
					/>
				</div>
			</div>

			<!-- Fragments -->
			<div id="fragments" class="flex flex-col items-center justify-between h-screen py-10">
				<h1 class="text-salmon-dark font-bold text-2xl">Fragments</h1>

				<div class="flex h-full w-full justify-between items-center">
					<div class="flex flex-col items-center justify-center">
						{#each categories as { name, checked }}
							<button
								class="{checked
									? 'text-gray-50 bg-salmon-dark'
									: ''} py-2 px-6 border-2 border-salmon-dark text-salmon-dark rounded-lg w-36 mb-2 hover:text-white hover:bg-salmon-dark"
								on:click={() =>
									(categories = categories.map((category) => ({
										...category,
										checked: category.name === name ? !category.checked : category.checked
									})))}
							>
								{name}
							</button>
						{/each}
					</div>

					<div
						class="flex flex-col mx-10 items-center justify-center mt-12 w-full h-full overflow-y-auto"
					>
						{#each fragments as { id, title, category, code } (id)}
							{#each categories as { name, checked }}
								{#if name === category && checked}
									<div
										class="flex justify-between w-4/6 mr-32 px-10 py-8 rounded-3xl bg-salmon-light mb-4"
										transition:slide={{ delay: 250, duration: 300, easing: cubicOut }}
									>
										<div class="flex flex-col">
											<div class="flex items-center mb-4">
												<p class="font-bold text-purpled-dark mr-4">{title}</p>
												<p class="bg-purpled text-white text-sm px-2 py-1 rounded-3xl">
													{category}
												</p>
											</div>

											{#if isCode}
												<div
													class="code text-white bg-purpled-dark px-4 py-2 rounded-lg"
													transition:slide={{ delay: 250, duration: 300, easing: cubicOut }}
												>
													{@html Prism.highlight(code, Prism.languages.html, 'html')}
												</div>
											{:else}
												<div transition:slide={{ delay: 250, duration: 300, easing: cubicOut }}>
													{@html code}
												</div>
											{/if}
										</div>
										<div class="flex flex-col text-white ml-4 justify-center">
											<CopyToClipboard
												on:copy={() =>
													toast.push('Successfully copied to clipboard', {
														theme: {
															'--toastBackground': '#34D399',
															'--toastColor': 'white',
															'--toastProgressBackground': '#10B981',
															'--toastWidth': '20rem'
														}
													})}
												text={code}
												let:copy
											>
												<SvelteTooltip tip="copy to clipboard" color="#586BA4" right>
													<button
														class="bg-salmon w-10 h-10 mb-4 text-white rounded-full hover:bg-salmon-dark"
														on:click={copy}
													>
														<i class="fa fa-copy" aria-hidden="true" />
													</button>
												</SvelteTooltip>
											</CopyToClipboard>

											<SvelteTooltip tip="show code" color="#586BA4" right>
												<button
													class="bg-salmon w-10 h-10 text-white rounded-full hover:bg-salmon-dark"
													on:click={() => (isCode = !isCode)}
												>
													<i class="fa fa-code" aria-hidden="true" />
												</button>
											</SvelteTooltip>
										</div>
									</div>
								{/if}
							{/each}
						{/each}
					</div>
				</div>
			</div>

			<!-- Footer -->
			<footer class="bg-white mb-4">
				<hr class="h-px my-6 bg-salmon-light border-none" />
				<p class="text-center text-salmon">© Fragmentails 2021</p>
			</footer>
		</div>
	</div>
</div>
