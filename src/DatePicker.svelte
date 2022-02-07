<script lang="ts">
    export let label: string;
    export let id: string;

    export let date: Date;
    let internalDate: Date;
</script>

<div class="flex flex-col">
    <label class="text-white" for={id}>{label}</label>
    <input type="date" id={id} bind:value={internalDate} />
</div>