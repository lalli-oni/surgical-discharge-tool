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

<div class="h-full w-full bg-pattern">
	<div class="p-4 md:p-6 md:px-8 flex flex-col">
		<div class="grow-0 mb-6 md:mb-8 flex flex-row justify-between items-center">
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
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply bg-brand-primary;
	}

	.bg-pattern {
		background: linear-gradient(to bottom right, transparent, black 80%), url("../background.svg");
		background-attachment: fixed;
		background-size: cover;
	}
</style>