<script lang="ts">
	import { createEventDispatcher } from 'svelte';
    import Svg from './svg.svelte';
    export let languages;
    export let language = languages[0];
    let expanded: boolean = false;
    export let collapseDelay: number = 300;

	const dispatch = createEventDispatcher();

    const languageChanged = (event) => {
        dispatch('language-changed', event);
    };

    const triggerExpand = () => {
        expanded = true;
    }

	$: if (expanded) {
		window.setTimeout(() => {expanded = false}, collapseDelay);
	}
</script>


<div
    class="flex flex-row justify-between items-center hover:cursor-pointer gap-2 group"
    on:click={triggerExpand} on:mouseenter={triggerExpand} on:click={triggerExpand}
>
    <div>
        <Svg icon={language.svg} label={language.id} class="group-hover:shadow-orange-glow" />
        <div hidden={!expanded} class="absolute mt-3 flex flex-col gap-1">
            {#each languages as languageOption}
                <Svg icon={languageOption.svg} label={languageOption.id} box={32} />
            {/each}
        </div>
    </div>
    <div class="text-white">
        V
    </div>
</div>

<!-- <select bind:value={language} on:change={languageChanged} class="bg-transparent text-white outline-none">
    {#each languages as language}
        <option value={language.id}>{ @html language?.svg}</option>
    {/each}
</select> -->