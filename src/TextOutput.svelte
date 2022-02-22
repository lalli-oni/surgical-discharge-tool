<script lang="ts">
    export let text: string = "";

    function textAreaClicked(event) {
        if (event?.target?.value?.length == 0) {
            console.log(`no text output`);
            message = "";
        }
        else {
            event.target.select();
            navigator.clipboard.writeText(event.target.value).then(value => {
                message = "Successfully copied text to clipboard! Use Ctrl+V now to paste it in your report.";
            });
        }
    };

    let message = "";
</script>


<div class="flex flex-col justify-center max-h-80">
    <!-- Stop resizing -->
    <textarea
        id="text-output" name="text-output"
        class="border-2 rounded-md p-2"
        on:click={textAreaClicked}
        disabled={!(text.length > 0)}
    >{text}</textarea>
    {#if message?.length > 0}
        <div class="text-white">{message}</div>
    {/if}
</div>

<style>
    textarea {
        width: 100%;
        height: 100%;
        outline: none;
        resize: none;
    }
</style>