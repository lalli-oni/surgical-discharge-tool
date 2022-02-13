<script lang="ts">
	import english from "./texts/english";
	import pirate from "./texts/pirate";
	import { useTextGenerator } from "./hooks/useTextGenerator";

	import Form from "./Form.svelte";
	import TextOutput from "./TextOutput.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";

	const textGenerator = useTextGenerator();
	const selectionChanged = (event) => {
		outputText = textGenerator.generate(event.detail, translations);
	};
	const languageChanged = (event) => {
		outputText = textGenerator.generate(event.detail, translations);
	};

	const languages = [{ id: "english", emoji: "👑" }, { id: "pirate", emoji: "🏴‍☠️" }];
	let language = languages[0];
	$: translations = (language.id === "english") ? english : pirate;
	let outputText = "";
</script>

<div class="bg-blue-900 h-screen py-8 px-16 flex flex-col">
	<div class="grow-0 mb-8 flex flex-row justify-between">
		<div>
			<h1 class="text-blue-100 font-semibold text-3xl">{translations.title}</h1>
			<div class="text-blue-300 text=xl">{translations.subtitle}</div>
		</div>
		<LanguageSelector languages={languages} bind:language={language}/>
	</div>
	<main class="flex flex-row gap-8 grow justify-evenly">
		<Form on:selection-changed={selectionChanged} labels={translations} />
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