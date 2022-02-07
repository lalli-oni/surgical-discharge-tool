<script lang="ts">
	import Form from "./Form.svelte";
	import TextOutput from "./TextOutput.svelte";
</script>

<div class="bg-blue-900 h-screen flex flex-col justify-center">
	<h1 class="grow-0 my-8 text-center text-blue-300 font-semibold text-2xl">Surgical discharge tool</h1>
	<main class="flex flex-row gap-2 grow justify-center">
		<Form />
		<TextOutput />
	</main>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>