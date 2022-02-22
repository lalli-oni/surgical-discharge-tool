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
    rhyrhms: {
      sinusrhyrhm: true,
      chronicalrhyrhm: false,
      paroxysmalrhyrhm: false,
      newAFrhyrhm: false,
      flutterrhyrhm: false,
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
    <h2 class="text-white">{labels.rhyrhms.label}</h2>
    <!-- TODO: single selection -->
    <Checkbox
      label={labels.rhyrhms.sinus}
      bind:checked={selection.rhyrhms.sinusrhyrhm}
    />
    <Checkbox
      label={labels.rhyrhms.chronicalAF}
      bind:checked={selection.rhyrhms.chronicalrhyrhm}
    />
    <Checkbox
      label={labels.rhyrhms.paroxysmalAF}
      bind:checked={selection.rhyrhms.paroxysmalrhyrhm}
    />
    <Checkbox
      label={labels.rhyrhms.newAF}
      bind:checked={selection.rhyrhms.newAFrhyrhm}
    />
    <Checkbox
      label={labels.rhyrhms.flutter}
      bind:checked={selection.rhyrhms.flutterrhyrhm}
    />
  </section>
  {#if selection.rhyrhms.newAFrhyrhm || selection.rhyrhms.flutterrhyrhm}
    <section>
      <h2 class="text-white">{labels.rhyrhms.treatments.label}</h2>
      <Checkbox
        label={labels.rhyrhms.treatments.metoprolol}
        bind:checked={selection.rhyrhms.treatments.metoprolol}
      />
      <Checkbox
        label={labels.rhyrhms.treatments.amiodarone}
        bind:checked={selection.rhyrhms.treatments.amiodarone}
      />
      <Checkbox
        label={labels.rhyrhms.treatments.defibrillation}
        bind:checked={selection.rhyrhms.treatments.defibrillation}
      />
    </section>
  {/if}
  <section>
    <!-- TODO: Disable text selection -->
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
