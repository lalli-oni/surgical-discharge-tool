<script lang="ts">
    export let label: string;
    export let id: string;
</script>

<div class="flex flex-row gap-4 items-baseline">
    <input type="checkbox" id={id}/>
    <label class="text-white" for={id}>{label}</label>
</div>