<script lang="ts">
	import { scale, fade } from 'svelte/transition';
    export let languages;
    export let language = languages.english;
    let expanded: boolean = false;

    const languageSelected = (languageId) => {
        const temp = languages.find((l) => l.meta.id === languageId);
        console.log(languageId)
        if (temp) language = temp;
        expanded = false;
    };

    const toggleVisibility = () => {
        expanded = !expanded;
    }
</script>


<div
    class="flex flex-row justify-between items-center gap-2 group p-2"
    on:click={toggleVisibility} on:mouseenter={toggleVisibility} on:mouseleave={toggleVisibility}
    in:fade={{ delay: 500, duration: 600}}
>
    <div>
        <span class="font-bold text-white p-2 hover:cursor-pointer">{language.meta.label}</span>
        {#if expanded === true}
        <!-- {#if true} -->
            <div
                class="flex absolute p-2 flex-col bg-brand-lighter rounded-lg border-2 border-brand-primary"
                in:scale={{ duration: 300 }} out:fade={{ duration: 300, delay: 100 }}
            >
                {#each languages.filter(lang => lang.meta.id !== language.meta.id) as languageOption}
                    <span class="text-white m-2 hover:text-highlight-primary hover:cursor-pointer" on:click={() => languageSelected(languageOption.meta.id)}>{languageOption.meta.label}</span>
                {/each}
            </div>
        {/if}
    </div>
    <div class="text-white select-none font-bold">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2.45401 7.93949C2.7353 7.65828 3.11676 7.50031 3.51451 7.50031C3.91225 7.50031 4.29372 7.65828 4.57501 7.93949L12 15.3645L19.425 7.93949C19.7079 7.66625 20.0868 7.51506 20.4801 7.51848C20.8734 7.52189 21.2496 7.67965 21.5277 7.95776C21.8058 8.23587 21.9636 8.61209 21.967 9.00539C21.9704 9.39868 21.8192 9.77758 21.546 10.0605L13.0605 18.546C12.7792 18.8272 12.3977 18.9852 12 18.9852C11.6023 18.9852 11.2208 18.8272 10.9395 18.546L2.45401 10.0605C2.1728 9.7792 2.01483 9.39773 2.01483 8.99999C2.01483 8.60224 2.1728 8.22078 2.45401 7.93949Z"
                fill="white" />
        </svg>
    </div>
</div>