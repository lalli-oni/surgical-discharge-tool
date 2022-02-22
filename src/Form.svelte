<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let labels;

  const dispatch = createEventDispatcher();

  import Checkbox from "./Checkbox.svelte";
  import DatePicker from "./DatePicker.svelte";
  import SingleChoice from "./SingleChoice.svelte";

  const dateChanged = (event) => {
    selection.operationDate = event.detail.date;
    dispatch("selection-changed", selection);
  };

  let rhythmSelected = "sinus";

  const selection = {
    organ: "heart",
    operationDate: null,
    rhythms: {
      sinus: false,
      chronicalAF: false,
      paroxysmalAF: false,
      newAF: false,
      flutter: false,
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

  $: if (selection.operationDate) dispatch("selection-changed", selection);

  $: if (rhythmSelected) Object.keys(selection.rhythms)
                               .filter(k => k !== "treatments")
                               .forEach(f => selection.rhythms[f] = (rhythmSelected === f) ? true : false);
</script>

<form class="flex flex-col gap-4">
  <section>
    <h2>{labels.organ}</h2>
    <div class="flex flex-row justify-around">
      <SingleChoice
        groupName="organ-selection"
        choices={[{ id: "heart", label: labels.heart }, { id: "lungs", label: labels.lungs }]}
        bind:selected={selection.organ}
      />
    </div>
  </section>
  <section>
    <h2>{labels.times.label}</h2>
    <DatePicker
      on:date-selected={dateChanged}
      label={labels.times.dayOfOperation}
      id="operation-date"
    />
  </section>
  <section>
    <h2>{labels.rhythms.label}</h2>
    <div class="flex flex-col">
      <SingleChoice
        groupName="rhythm-selection"
        choices={Object.keys(selection.rhythms).filter(k => k !== "treatments").map((key) => { if (key) return { id: key, label: labels.rhythms[key] } })}
        bind:selected={rhythmSelected}
      />
    </div>
  </section>
  {#if selection.rhythms.newAF || selection.rhythms.flutter}
    <section>
      <h2>{labels.rhythms.treatments.label}</h2>
      <Checkbox
        label={labels.rhythms.treatments.metoprolol}
        bind:checked={selection.rhythms.treatments.metoprolol}
      />
      <Checkbox
        label={labels.rhythms.treatments.amiodarone}
        bind:checked={selection.rhythms.treatments.amiodarone}
      />
      <Checkbox
        label={labels.rhythms.treatments.defibrillation}
        bind:checked={selection.rhythms.treatments.defibrillation}
      />
    </section>
  {/if}
  <section>
    <h2>{labels.respitory.label}</h2>
    <Checkbox label="No problems" bind:checked={selection.respitory.lulz} />
  </section>
  <section>
    <h2>{labels.dischargeLocations.label}</h2>
    <select
      name="discharge-location"
      id="discharge-location-selection"
      class="bg-transparent text-white hover:shadow-md hover:shadow-blue-400"
      bind:value={selection.dischargeLocation}
    >
    {#each labels.dischargeLocations.items as location}
      <option value={location} class="text-white bg-blue-600">{location.label}</option>
    {/each}
    </select>
  </section>
</form>

<style>
  section > h2 {
    @apply mb-2 text-white select-none text-xl font-bold tracking-wide;
  }
</style>