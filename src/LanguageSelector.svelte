<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import Svg from './svg.svelte';
    export let languages;
    export let language = languages.english;
    let expanded: boolean = false;
    export let collapseDelay: number = 300;

	const dispatch = createEventDispatcher();

    const languageSelected = (event) => {
        const temp = languages.find((l) => l.meta.id === event.detail);
        if (temp) language = temp;
    };

    const triggerExpand = () => {
        expanded = true;
    }

	$: if (expanded) {
		window.setTimeout(() => {expanded = false}, collapseDelay);
	}
</script>


<div
    class="flex flex-row justify-between items-center hover:cursor-pointer gap-2 group p-2"
    on:click={triggerExpand} on:mouseenter={triggerExpand} on:click={triggerExpand}
>
    <div>
        <Svg id="selected-language" icon={language.meta.flag} label={language.id} class="group-hover:shadow-orange-glow" 
        boxWidth={640} boxHeight={480}
    />
        <div class="hidden absolute group-hover:flex mt-3 p-2 flex-col bg-brand-lighter rounded-lg">
            {#each languages.filter(lang => lang.meta.id !== language.meta.id) as languageOption}
                <Svg class="shadow-md hover:shadow-blue-100 m-1"
                    icon={languageOption.meta.flag}
                    id={languageOption.meta.id}
                    label={languageOption.meta.id}
                    boxWidth={640} boxHeight={480}
                    on:svg-click={languageSelected}
                />
            {/each}
        </div>
    </div>
    <div class="text-white">
        V
    </div>
</div>