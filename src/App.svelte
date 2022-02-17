<script lang="ts">
	import * as languages from "./texts";
	import { useTextGenerator } from "./hooks/useTextGenerator";

	import Form from "./Form.svelte";
	import TextOutput from "./TextOutput.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";

	const textGenerator = useTextGenerator();
	const selectionChanged = (event) => {
		selection = event.detail;
		if (selection && language) outputText = textGenerator.generate(selection, language);
	};

	let language = languages.english;

	let selection;
	let outputText = "";
</script>

<div class="bg-brand-primary h-screen py-8 px-16 flex flex-col">
	<div class="grow-0 mb-8 flex flex-row justify-between items-center">
		<div>
			<h1 class="text-blue-100 font-semibold text-3xl">{language.title}</h1>
			<div class="text-blue-300 text=xl">{language.subtitle}</div>
		</div>
		<LanguageSelector bind:language languages={Object.values(languages)} />
	</div>
	<main class="flex flex-row gap-8 grow justify-evenly">
		<Form on:selection-changed={selectionChanged} labels={language} />
		<TextOutput text={outputText} />
	</main>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	h2 {
		font-size: larger;
		font-weight: 600;
	}

	section {
		margin-bottom: 1.1rem;
	}
</style>