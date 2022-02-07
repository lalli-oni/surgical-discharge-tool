<script lang="ts">
    import Checkbox from "./Checkbox.svelte";
    import DatePicker from "./DatePicker.svelte";

    // Form Values
    let operationDate;

</script>

<form class="flex flex-col gap-4">
    <section>
        <h2 class="text-white">Organ</h2>
        <select name="organs" id="organ-selection">
            <option value="heart">Heart</option>
            <option value="lungs">Lungs</option>
        </select>
    </section>
    <section>
        <h2 class="text-white">Times</h2>
        <DatePicker bind:operationDate label="Day of operation" id="operation-date"/>
    </section>
    <section>
        <h2 class="text-white">Heart rhytms</h2>
        <Checkbox label="Sinus" id="sinus-rhytm" />
        <Checkbox label="Chronical AF" id="chron-af" />
        <Checkbox label="Paroxysmal AF" id="parox-af" />
        <Checkbox label="New AF" id="new-af" />
        <Checkbox label="Flutter" id="flutter-af" />

        
    </section>
    <section>
        <h2 class="text-white">Respiratory</h2>
        <Checkbox label="No problems" id="" />

    </section>
</form>