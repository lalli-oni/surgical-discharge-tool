<script lang="ts">
    export let languages = [];
    export let language = languages[0];

</script>

<select bind:value={language}>
    {#each languages as language}
        <option value={language}>{language.emoji}</option>
    {/each}
</select>