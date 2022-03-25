<script lang="ts">
	import * as languages from "./texts";
	import { useTextGenerator } from "./hooks/useTextGenerator";

	import Form from "./components/Form.svelte";
	import TextOutput from "./components/TextOutput.svelte";
	import LanguageSelector from "./components/inputs/LanguageSelector.svelte";
	import About from "./components/About.svelte";
	import Modal from "./components/Modal.svelte";

	import { modal } from './store.js';

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
	<div class="p-4 px:8 md:p-6 md:px-16 flex flex-col h-full">
		<div class="grow-0 pb-6 md:mb-8 gap-8 md:gap-4 flex flex-row justify-between items-center">
			<div>
				<h1 class="text-white font-semibold text-3xl">{language.title}</h1>
				<div class="text-blue-200 text=xl">{language.subtitle}</div>
			</div>
			<div class="flex flex-row items-baseline gap-4">
				<Modal show={$modal}>
					<About />
				</Modal>
				<LanguageSelector bind:language languages={Object.values(languages)} />
			</div>
		</div>
		<main class="flex flex-row gap-8 grow justify-evenly overflow-hidden">
			<Form on:selection-changed={selectionChanged} labels={language} />
			<TextOutput text={outputText} placeholder={language.instruction} />
		</main>
	</div>
</div>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	html {
		height: 100%;
	}

	body {
		@apply bg-brand-primary h-full overflow-hidden;
	}

	.bg-pattern {
		/* background: linear-gradient(to bottom right, #0F01A7, black 50%), url("../background.svg"); */
		background: url("../foreground-wave.svg") no-repeat, url("../background-wave.svg") no-repeat, linear-gradient(130.67deg, #0F01A7 -1.87%, #000000 79.27%);
		background-position: right 0px bottom 0px, right 0px bottom 0px;
		background-blend-mode: exclusion, exclusion, normal;
		background-attachment: scroll, scroll, fixed;
		background-size: contain, contain, cover;
	}
	
    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: white;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: darkgrey;
      outline: 1px solid slategrey;
    }
</style>