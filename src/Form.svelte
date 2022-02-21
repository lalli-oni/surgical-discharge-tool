<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let labels;

  const dispatch = createEventDispatcher();

  import Checkbox from "./Checkbox.svelte";
  import DatePicker from "./DatePicker.svelte";

  const dateChanged = (event) => {
    selection.operationDate = event.detail.date;
    dispatch("selection-changed", selection);
  };

  const selection = {
    organ: "heart",
    operationDate: new Date(),
    rythms: {
      sinusRythm: true,
      chronicalRythm: false,
      paroxysmalRythm: false,
      newAFRythm: false,
      flutterRythm: false,
      treatments: {
        metoprolol: false,
        amiodarone: false,
        defibrillation: false,
      },
    },
    respitory: {
      lulz: false,
    },
    dischargeLocation: labels.dischargeLocations[0]
  };

  $: dispatch("selection-changed", selection);
</script>

<form class="flex flex-col gap-4">
  <section>
    <h2 class="text-white">{labels.organ}</h2>
    <!-- TODO: radio buttons -->
    <select
      name="organs"
      id="organ-selection"
      class="bg-transparent text-white"
      bind:value={selection.organ}
    >
      <option value="heart" class="text-black">{labels.heart}</option>
      <option value="lungs" class="text-black">{labels.lungs}</option>
    </select>
  </section>
  <section>
    <h2 class="text-white">{labels.times.label}</h2>
    <DatePicker
      on:date-selected={dateChanged}
      label={labels.times.dayOfOperation}
      id="operation-date"
    />
  </section>
  <section>
    <h2 class="text-white">{labels.rhytms.label}</h2>
    <Checkbox
      label={labels.rhytms.sinus}
      bind:checked={selection.rythms.sinusRythm}
    />
    <Checkbox
      label={labels.rhytms.chronicalAF}
      bind:checked={selection.rythms.chronicalRythm}
    />
    <Checkbox
      label={labels.rhytms.paroxysmalAF}
      bind:checked={selection.rythms.paroxysmalRythm}
    />
    <Checkbox
      label={labels.rhytms.newAF}
      bind:checked={selection.rythms.newAFRythm}
    />
    <Checkbox
      label={labels.rhytms.flutter}
      bind:checked={selection.rythms.flutterRythm}
    />
  </section>
  {#if selection.rythms.newAFRythm || selection.rythms.flutterRythm}
    <section>
      <h2 class="text-white">{labels.rhytms.treatments.label}</h2>
      <Checkbox
        label={labels.rhytms.treatments.metoprolol}
        bind:checked={selection.rythms.treatments.metoprolol}
      />
      <Checkbox
        label={labels.rhytms.treatments.amiodarone}
        bind:checked={selection.rythms.treatments.amiodarone}
      />
      <Checkbox
        label={labels.rhytms.treatments.defibrillation}
        bind:checked={selection.rythms.treatments.defibrillation}
      />
    </section>
  {/if}
  <section>
    <h2 class="text-white">{labels.respitory.label}</h2>
    <Checkbox label="No problems" bind:checked={selection.respitory.lulz} />
  </section>
  <section>
    <h2 class="text-white">{labels.dischargeLocations.label}</h2>
    <select
      name="discharge-location"
      id="discharge-location-selection"
      class="bg-transparent text-white"
      bind:value={selection.dischargeLocation}
    >
    {#each labels.dischargeLocations.items as location}
      <option value={location} class="text-black">{location.label}</option>
    {/each}
    </select>
  </section>
</form>
