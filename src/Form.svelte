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
    operationDate: new Date(),
    rhythms: {
      sinus: true,
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

  $: dispatch("selection-changed", selection);

  $: if (rhythmSelected) Object.keys(selection.rhythms)
                               .filter(k => k !== "treatments")
                               .forEach(f => selection.rhythms[f] = (rhythmSelected === f) ? true : false);
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
    <h2 class="text-white select-none">{labels.times.label}</h2>
    <DatePicker
      on:date-selected={dateChanged}
      label={labels.times.dayOfOperation}
      id="operation-date"
    />
  </section>
  <section>
    <h2 class="text-white select-none">{labels.rhythms.label}</h2>
    <!-- TODO: single selection -->
    <SingleChoice
      groupName="rhythm-selection"
      choices={Object.keys(selection.rhythms).filter(k => k !== "treatments").map((key) => { if (key) return { id: key, label: labels.rhythms[key] } })}
      bind:selected={rhythmSelected}
    />
  </section>
  {#if selection.rhythms.newAF || selection.rhythms.flutter}
    <section>
      <h2 class="text-white select-none">{labels.rhythms.treatments.label}</h2>
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
    <h2 class="text-white select-none">{labels.respitory.label}</h2>
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
