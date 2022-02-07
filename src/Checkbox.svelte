<script lang="ts">
    export let label: string;
    export let id: string;
</script>

<div class="flex flex-row">
    <label class="text-white" for={id}>{label}</label>
    <input type="checkbox" id={id}/>
</div>