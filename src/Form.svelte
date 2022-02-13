<script lang="ts">
    import { capitalizeFirstLetter } from './functions/text-mutators';
	import { createEventDispatcher } from 'svelte';

    export let labels;

	const dispatch = createEventDispatcher();

    import Checkbox from "./Checkbox.svelte";
    import DatePicker from "./DatePicker.svelte";

    const dateChanged = (event) => {
        console.log(event);
        selection.operationDate = event.detail.date;
        dispatch('selection-changed', selection);
    };

    const selection = {
        organ: "heart",
        operationDate: new Date(),
    }
</script>

<form class="flex flex-col gap-4">
    <section>
        <h2 class="text-white">{labels.organ}</h2>
        <select name="organs" id="organ-selection">
            <option value="heart">{labels.heart}</option>
            <option value="lungs">{labels.lungs}</option>
        </select>
    </section>
    <section>
        <h2 class="text-white">{labels.times.label}</h2>
        <DatePicker on:date-selected={dateChanged} label={labels.times.dayOfOperation} id="operation-date"/>
    </section>
    <section>
        <h2 class="text-white">{labels.rhytms.label}</h2>
        <Checkbox label={labels.rhytms.sinus} id="sinus-rhytm" />
        <Checkbox label={labels.rhytms.chronicalAF} id="chron-af" />
        <Checkbox label={labels.rhytms.paroxysmalAF} id="parox-af" />
        <Checkbox label={labels.rhytms.newAF} id="new-af" />
        <Checkbox label={labels.rhytms.flutter} id="flutter-af" />
    </section>
    <section>
        <h2 class="text-white">{labels.respitory.label}</h2>
        <Checkbox label="No problems" id="" />

    </section>
</form>