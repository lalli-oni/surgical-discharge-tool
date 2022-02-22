<script lang="ts">
	import { scale, fade } from 'svelte/transition';
    import Svg from './svg.svelte';
    export let languages;
    export let language = languages.english;
    let expanded: boolean = false;

    const languageSelected = (event) => {
        const temp = languages.find((l) => l.meta.id === event.detail);
        if (temp) language = temp;
        expanded = false;
    };

    const toggleVisibility = () => {
        expanded = !expanded;
    }
</script>


<div
    class="flex flex-row justify-between items-center hover:cursor-pointer gap-2 group p-2"
    on:click={toggleVisibility} on:mouseenter={toggleVisibility} on:mouseleave={toggleVisibility}
>
    <div>
        <Svg id="selected-language" icon={language.meta.flag} label={language.id}
            class="group-hover:shadow-orange-glow md:scale-125" 
            boxWidth={640} boxHeight={480}
        />
        {#if expanded === true}
            <div
                class="flex absolute mt-3 p-2 flex-col bg-brand-lighter rounded-lg"
                in:scale={{ duration: 300 }} out:fade={{ duration: 300, delay: 100 }}
            >
                {#each languages.filter(lang => lang.meta.id !== language.meta.id) as languageOption}
                    <Svg class="shadow-md hover:shadow-blue-100 m-1 hover:scale-125"
                        icon={languageOption.meta.flag}
                        id={languageOption.meta.id}
                        label={languageOption.meta.id}
                        boxWidth={640} boxHeight={480}
                        on:svg-click={languageSelected}
                    />
                {/each}
            </div>
        {/if}
    </div>
    <div class="text-white select-none font-bold">
        V
    </div>
</div>