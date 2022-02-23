<script lang="ts">
    export let groupName: string;
    export let choices: Array<any> = [];
    export let selected: any;

    const select = (choice) => selected = choices.find(c => c.id === choice);
</script>

{#each choices as choice}
    <div
        on:click={(e) => select(choice?.id)}
        class={[
            `border-2`,
            `flex ${(choice?.icon?.length) ? "flex-col justify-evenly" : "flex-row justify-start"} items-center `,
            `${(choice?.id === selected?.id) ? "border-highlight-primary" : "border-neutral-400"}`,
            `p-2 rounded-lg cursor-pointer`,
            `${(choice?.id === selected?.id) ? "stroke-highlight-primary" : "stroke-white"}`,
            `${(choice?.id === selected?.id) ? "text-highlight-primary" : "text-white"}`
        ].join(' ')}
    >
        {#if choice?.icon?.length}
            {@html choice.icon}
        {:else}
            <div class={`pr-4 ${(choice?.id === selected?.id)}`}>O</div>
        {/if}
        <span class={`text-center`} for={choice.id}>
            {choice.label}
        <span/>
    </div>
{/each}

