<script lang="ts">
    export let label: string;
    export let disabledTooltip: string;
    export let disabled: boolean = false;

    let showTooltip = false;

    $: console.log(showTooltip)
</script>

<button
    class="text-white border disabled:cursor-not-allowed disabled:text-neutral-400 disabled:bg-brand-lighter border-brand-primary hover:border-highlight-primary p-2 rounded-lg"
    aria-label={label} on:click disabled={disabled}
>
    {label}
</button>
{#if showTooltip}
    <div role="tooltip" class="absolute">
        {disabledTooltip}
    </div>
{/if}