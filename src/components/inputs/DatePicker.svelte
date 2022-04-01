<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label: string;
    export let id: string;

    export let date;

    function dateSelected(event) {
        dispatch('date-selected', { id, date: event.target.valueAsDate });
    };
</script>

<!-- {@debug date} -->

<div class="flex flex-row justify-between gap-2 items-baseline">
    <label class="text-white grow" for={id}>{label}</label>
    <input
        type="date"
        id={id}
        bind:value={date} on:input={dateSelected}
        class={`bg-transparent max-w-60% rounded-md text-white p-2 border border-brand-primary hover:border-highlight-primary shrink ${(date) ? "border-2" : "border"}`}
    />
</div>