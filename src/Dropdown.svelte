<script lang="ts" context="module">
    export type DropdownOption = {
        id: string;
        label: string;
    };

    export let options: DropdownOption[];
    export let selected: DropdownOption;
</script>

<select bind:value={selected}>
    {#each options as option}
        <option>{option.label}</option>
    {/each}
</select>