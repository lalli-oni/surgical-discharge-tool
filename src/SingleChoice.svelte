<script lang="ts">
    export let groupName: string;
    export let choices: Array<any> = [];
    export let selected: any = null;
</script>

{#each choices as choice}
    <label class="text-white">
        <input type=radio value={choice.id} bind:group={selected} name={groupName} />
        {choice.label}
    </label>
{/each}

