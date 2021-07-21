<script>
	import Card from '../components/Card.svelte';
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

			<div id="fragments" class="flex flex-col items-center h-screen py-10">
				<h1 class="text-salmon-dark font-bold text-2xl">Fragments</h1>
			</div>
		</div>
	</div>
</div>
