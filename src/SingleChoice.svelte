<script lang="ts">
    export let groupName: string;
    export let choices: Array<any> = [];
    export let selected: any;

    import CheckMark from "./CheckMark.svelte";

    const select = (choice) => selected = choices.find(c => c.id === choice);

    $: if (typeof selected === "string") selected = choices.find(c => c?.id === selected);
</script>

{#each choices as choice}
    <div
        on:click={(e) => select(choice?.id)}
        class={[
            `border  hover:border-highlight-secondary`,
            `flex gap-2 ${(choice?.icon?.length) ? "flex-col justify-evenly" : "flex-row justify-start"} items-center `,
            `${(choice?.id === selected?.id) ? "border-highlight-primary" : "border-brand-primary"}`,
            `p-2 rounded-lg cursor-pointer`,
            `${(choice?.id === selected?.id) ? "stroke-highlight-primary" : "stroke-white"}`,
            `${(choice?.id === selected?.id) ? "text-highlight-primary" : "text-white"}`
        ].join(' ')}
    >
        {#if choice?.icon?.length}
            {@html choice.icon}
        {:else}
        <!-- TODO: Proper circle icon -->
            <!-- <div class={`pr-4 ${(choice?.id === selected?.id)}`}>O</div> -->
            <CheckMark checked={choice?.id === selected?.id} />
        {/if}
        <span class={`text-center`} for={choice.id}>
            {choice.label}
        <span/>
    </div>
{/each}

