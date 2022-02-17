<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    export let id: string;
    export let label: string;
    export let width: string = "1rem";
    export let height: string = "1rem";
    export let boxWidth: number = 32;
    export let boxHeight: number = 32;
    export let icon: string;

    const onClick = (event) => {
        dispatch('svg-click', id);
    };
</script>

<svg class={$$props.class} {id} on:click={onClick} aria-label={label} {width} {height} viewBox="0 0 {boxWidth} {boxHeight}"
>{@html icon}</svg>