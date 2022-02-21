<script lang="ts">
    interface DropdownOption {
        id: string;
        label: string;
    };

    export let options: DropdownOption[];
    export let selected: DropdownOption;
</script>

<select bind:value={selected} class="outline-none bg-transparent">
    {#each options as option}
        <option class="bg-transparent">{option.label}</option>
    {/each}
</select>