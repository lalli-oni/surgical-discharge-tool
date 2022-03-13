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


<div class="flex flex-col justify-start h-full w-full">
    {#if message?.length > 0}
        <div class="text-white animate-pulse duration-1000 p-2">{message}</div>
    {/if}
    <textarea
        id="text-output" name="text-output"
        class="w-full h-full max-h-80% outline-none resize-none border-2 rounded-md p-2 border-brand-primary hover:border-highlight-secondary"
        on:click={textAreaClicked}
        disabled={!(text.length > 0)}
    >{text}</textarea>
</div>