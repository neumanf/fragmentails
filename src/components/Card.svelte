<script>
	export let title;
	export let content;
	export let icon;
</script>

<div class="flex flex-col w-5/6 h-64 sm:w-56 lg:w-96 border-2 bg-white border-salmon rounded-2xl">
	<div
		class="flex bg-salmon text-white text-6xl sm:text-4xl py-4 h-2/5 w-full justify-center items-center rounded-t-xl"
	>
		<i class={icon} aria-hidden="true" />
	</div>
	<div class="flex flex-col items-center px-14 py-8">
		<p class="text-purpled-dark text-center font-medium text-xl">{title}</p>
		<p class="text-purpled text-center">{content}</p>
	</div>
</div>
