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

	let menuOpen: boolean;
	let language = languages.english;
	let dirty: boolean = false;

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
				<!-- <MenuButton align="right" bind:open={menuOpen} /> -->
			</div>
		</div>
		<main class="flex flex-row gap-8 grow justify-evenly overflow-hidden">
			<!-- <Modal show={$modal}>
				<MenuBar sidebarOpen={menuOpen} />
			</Modal> -->
			<Form on:selection-changed={selectionChanged} labels={language} bind:resetSelection />
			<div class="flex flex-col gap-2">
				<div>
					<Button label={language.buttons.clear} on:click={resetSelection()} disabled={!dirty} disabledTooltip="Yo, you need to do something first!" />
				</div>
				<TextOutput text={outputText} placeholder={language.messages.textOutputPlaceholder} />
			</div>
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
		background:  url("../foreground-wave.svg") no-repeat, url("../background-wave.svg") no-repeat, linear-gradient(130.67deg, #0F01A7 -1.87%, #000000 79.27%);
		background-position: right 0px bottom 0px, right 0px bottom 0px;
		background-blend-mode: exclusion, exclusion, normal;
		background-attachment: scroll, scroll, fixed;
		background-size: contain, contain, cover;
	}

	#foreground-wave-gradient-color {
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% {
			stop-color: #a24f02;
		}

		100% {
			stop-color: #a20702;
		}
	}
</style>