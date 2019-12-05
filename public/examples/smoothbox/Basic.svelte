<script>
  import { SmoothBox } from "@sveltech/bricks";
  import { text } from "./_content.js";
  let usePre = false;
</script>

<label for="usepre">Use Pre-tags</label>
<input id="usepre" type="checkbox" bind:checked={usePre}>
<div  class="m-8 p-4 shadow bg-gray-700 text-white">
  <SmoothBox widthProp="" style="transition: all 0.3s ">
    {#if usePre}
      <pre>{text}</pre>
    {:else}
      <div >{text}</div>
    {/if}
  </SmoothBox>  
</div>
