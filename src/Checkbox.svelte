<script lang="ts">
    export let label: string;
    export let id: string = null;
    export let checked: boolean;
</script>

<div class="flex flex-row gap-4 items-baseline">
    <input bind:checked type="checkbox" {id} />
    <label class="text-white" for={id}>{label}</label>
</div>