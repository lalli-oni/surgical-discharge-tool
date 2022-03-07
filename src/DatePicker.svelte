<script lang="ts">
	import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let label: string;
    export let id: string;

    function dateSelected(event) {
        dispatch('date-selected', { id, date: event.target.valueAsDate });
    };
</script>

<!-- {@debug date} -->

<div class="flex flex-row justify-between gap-2">
    <label class="text-white grow" for={id}>{label}</label>
    <input type="date" id={id} on:input={dateSelected} class={`bg-transparent text-white border shrink ${(value) ? "border-4" : "border-2"}`} />
</div>