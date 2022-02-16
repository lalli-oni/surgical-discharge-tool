<script lang="ts">
    export let label: string;
    export let width: string = "1rem";
    export let height: string = "1rem";
    export let box: number = 32;
    export let icon: string;
    
</script>

<svg class={$$props.class} aria-label={label} {width} {height} viewBox="0 0 {box} {box}"
>{@html icon}</svg>