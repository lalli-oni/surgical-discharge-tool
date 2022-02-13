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

<div class="flex flex-col">
    <label class="text-white" for={id}>{label}</label>
    <input type="date" id={id} on:input={dateSelected} />
</div>