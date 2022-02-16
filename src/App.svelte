<script lang="ts">
	import english from "./texts/english";
	import pirate from "./texts/pirate";
	import { useTextGenerator } from "./hooks/useTextGenerator";

	import Form from "./Form.svelte";
	import TextOutput from "./TextOutput.svelte";
	import LanguageSelector from "./LanguageSelector.svelte";

	const textGenerator = useTextGenerator();
	const selectionChanged = (event) => {
		selection = event.detail;
		if (selection && translations) outputText = textGenerator.generate(selection, translations);
	};
	const languageChanged = (event) => {
		if (selection && translations) outputText = textGenerator.generate(selection, translations);
	};

	$: if (language) translations = (language === "english") ? english : pirate;

	$: if (selection) console.log(selection)
	const languages = [{
		id: "english",
		emoji: "👑",
		svg:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-no" viewBox="0 0 640 480"><path fill="#ed2939" d="M0 0h640v480H0z"/><path fill="#fff" d="M180 0h120v480H180z"/><path fill="#fff" d="M0 180h640v120H0z"/><path fill="#002664" d="M210 0h60v480h-60z"/><path fill="#002664" d="M0 210h640v60H0z"/></svg>`
	}, {
		id: "pirate",
		emoji: "🏴‍☠️",
		svg:`<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-no" viewBox="0 0 640 480"><path fill="#ed2939" d="M0 0h640v480H0z"/><path fill="#fff" d="M180 0h120v480H180z"/><path fill="#fff" d="M0 180h640v120H0z"/><path fill="#002664" d="M210 0h60v480h-60z"/><path fill="#002664" d="M0 210h640v60H0z"/></svg>`

	}];
	let language;
	let selection;
	let translations = english;
	let outputText = "";
</script>

<div class="bg-blue-900 h-screen py-8 px-16 flex flex-col">
	<div class="grow-0 mb-8 flex flex-row justify-between items-center">
		<div>
			<h1 class="text-blue-100 font-semibold text-3xl">{translations.title}</h1>
			<div class="text-blue-300 text=xl">{translations.subtitle}</div>
		</div>
		<LanguageSelector bind:language languages={languages} on:language-changed={languageChanged}/>
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