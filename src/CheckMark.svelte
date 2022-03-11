<script lang="ts">
    export let checked: boolean = false;
</script>


<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="cut-hole">
        <circle cx="6" cy="8" r="5" />
      </clipPath>
    </defs>

    <circle cx="8" cy="8" r="7.5" stroke={(checked) ? "#FFC700" : "#4538D4"} fill={(checked) ? "#FFC700" : "transparent"} stroke-width="2" />
</svg>