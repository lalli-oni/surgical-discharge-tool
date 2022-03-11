<script lang="ts">
  import { fade, fly } from 'svelte/transition';
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

  const heartIcon = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.54 20.019C13.852 17.943 12.268 17.498 10.786 18.682C8.56304 20.458 7.92504 26.65 9.71304 32.109C11.502 37.568 14.98 45.002 22.002 45.002C29.023 45.002 30.684 37.522 33.548 33C36.413 28.478 37.928 24.115 35.121 18.682" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 18.037C10.678 16.0172 9.34465 14.0048 8.00002 12C6.55402 9.85501 10.251 7.08201 12 8.96801C13.166 10.226 14.715 12.078 16.647 14.525" stroke-width="4" stroke-linecap="round"/><path d="M16.024 25.64C15.539 19.576 15.934 15.628 17.206 13.795C19.116 11.045 22.663 10.003 26.003 10.003C27.993 10.003 29.809 10.85 31.453 12.544" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 12.613C42.586 14.649 41.63 16.51 38.684 16.931C35.739 17.352 33.531 18.833 31.939 20.079C30.346 21.325 27.499 25.105 26.936 27.002C26.374 28.9 23.16 27.155 22.297 26.397C21.434 25.639 20.585 23.981 22.297 22.246C24.009 20.511 23.638 20.165 23.638 18.406C23.638 16.646 33 10.826 38.273 10.294C39.445 10.226 41.415 10.576 42 12.613V12.613Z" stroke-width="4"/><path d="M36.613 10.717C36.291 11.822 36.291 12.857 36.613 13.824C36.935 14.791 37.626 15.826 38.684 16.931M24.008 4.00001V9.26301V4.00001ZM21.307 10.718C18.289 6.92501 15.856 4.80801 14.007 4.36801L21.307 10.718ZM18.004 7.02901L18.994 2.96201L18.004 7.02901Z" stroke-width="4" stroke-linecap="round"/></svg>`;
  const lungIcon = `<svg width="48" height="48" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.9999 2.66666V13.5M9.17544 37.3333C12.6681 37.3333 15.4999 34.4408 15.4999 30.8767V9.72349C15.4999 8.21982 14.3039 6.99999 12.8306 6.99999C12.3864 6.99999 11.9531 7.11266 11.5653 7.32499L11.2836 7.50482C8.12027 9.79932 6.01427 13.24 3.90827 20.1235C2.99827 23.0918 2.53027 26.5412 2.50427 30.4693C2.47827 34.0985 5.23644 37.0863 8.73777 37.3182L9.1776 37.3333H9.17544ZM34.8266 37.3333C31.3318 37.3333 28.4999 34.4408 28.4999 30.8767V9.72349C28.4999 8.21982 29.6959 6.99999 31.1714 6.99999C31.6134 6.99999 32.0489 7.11266 32.4368 7.32499L32.7184 7.50482C35.8818 9.79932 37.9878 13.24 40.0959 20.1235C41.0059 23.0918 41.4739 26.5412 41.4999 30.4693C41.5259 34.0985 38.7678 37.0863 35.2643 37.3182L34.8266 37.3333ZM15.4999 20C17.2238 20 18.8771 19.3152 20.0961 18.0962C21.3151 16.8772 21.9999 15.2239 21.9999 13.5C21.9999 15.2239 22.6848 16.8772 23.9037 18.0962C25.1227 19.3152 26.776 20 28.4999 20H15.4999Z" stroke-width="4.33333" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  let rhythmSelected = { id: "sinus", label: labels.rhythms["sinus"] };
  let rhythmTreatmentSelected = undefined;
  let organChoices = [{ id: "heart", label: labels.heart, icon: heartIcon }, { id: "lungs", label: labels.lungs, icon: lungIcon }];
  let validSelection = false;

  const selection = {
    organ: organChoices[0],
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

  // Form validation
  $: if (selection.operationDate) validSelection = true;

  $: if (validSelection) dispatch("selection-changed", selection);

  $: console.log(selection.rhythms);
  // $: console.log(rhythmSelected);

  $: if (rhythmSelected) Object.keys(selection.rhythms)
                               .filter(k => k !== "treatments")
                               .forEach(f => selection.rhythms[f] = (rhythmSelected.id === f) ? true : false);

  $: if (rhythmTreatmentSelected) Object.keys(selection.rhythms.treatments).forEach(f => selection.rhythms.treatments[f] = (rhythmTreatmentSelected.id === f) ? true : false);
</script>

<!-- <form class="scroll-shadow off-bottom grow min-w-max"> -->
  <!-- TODO: single column drops discharge location and overflow is disabled -->
<form class="grow min-w-max overflow-x-hidden overflow-y-auto">
  <!-- <div class="scroll-box styled-scrollbar"> -->
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4">
    <section>
      <h2>{labels.organ}</h2>
      <div class="flex flex-row justify-around">
        <SingleChoice
          groupName="organ-selection"
          choices={organChoices}
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
      <div class="flex flex-col gap-2">
        <SingleChoice
          groupName="rhythm-selection"
          choices={Object.keys(selection.rhythms).filter(k => k !== "treatments").map((key) => { if (key) return { id: key, label: labels.rhythms[key] } })}
          bind:selected={rhythmSelected}
        />
      </div>
    </section>
    {#if selection.rhythms.newAF || selection.rhythms.flutter}
      <section in:fly="{{ y: -100, duration: 800 }}" out:fade={{ duration: 300 }}>
        <h2>{labels.rhythms.treatments.label}</h2>
        <SingleChoice
          groupName="rhythm-treatment-selection"
          choices={Object.keys(selection.rhythms.treatments).filter(k => k !== "treatments").map((key) => { if (key) return { id: key, label: labels.rhythms.treatments[key] } })}
          bind:selected={rhythmTreatmentSelected}
        />
        <!-- <Checkbox
          id="metoprolol-treatment-select"
          label={labels.rhythms.treatments.metoprolol}
          bind:checked={selection.rhythms.treatments.metoprolol}
        />
        <Checkbox
        id="amiodarone-treatment-select"
          label={labels.rhythms.treatments.amiodarone}
          bind:checked={selection.rhythms.treatments.amiodarone}
        />
        <Checkbox
        id="defibrillation-treatment-select"
          label={labels.rhythms.treatments.defibrillation}
          bind:checked={selection.rhythms.treatments.defibrillation}
        /> -->
      </section>
    {/if}
    <section>
      <h2>{labels.respitory.label}</h2>
      <Checkbox id="no-respiratory-problems-select" label="No problems" bind:checked={selection.respitory.lulz} />
    </section>
    <section>
      <h2>{labels.dischargeLocations.label}</h2>
      <select
        name="discharge-location"
        id="discharge-location-selection"
        class="bg-transparent border border-brand-primary p-2 pr-4 text-highlight-primary rounded-md hover:shadow-blue-400"
        bind:value={selection.dischargeLocation}
      >
      {#each labels.dischargeLocations.items as location}
        <option value={location} class={`bg-brand-lighter hover:text-highlight-primary ${(selection.dischargeLocation === location)  ? "text-highlight-primary" : "text-white"}`}>{location.label}</option>
      {/each}
      </select>
    </section>
  </div>
</form>

<style>
  section {
    @apply max-w-xs;
  }

  section > h2 {
    @apply text-white pb-2 select-none text-xl font-bold tracking-wider;
  }
</style>