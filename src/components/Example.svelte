<script>
  import * as components from "../../public/examples";
  import ExampleCode from "./_exampleCode.svelte";
  import Prism from "./Prism.svelte";
  import { Tabs, TabsLink, TabsPage, Details, SmoothBox } from "svelteBricks";
  import { slide } from "svelte/transition";
  import ArrowIcon from "@iconscout/unicons/svg/arrow.svg";

  export let group,
    fullscreen = false,
    show = false,
    height = "auto",
    files = [];

  const Component = components[group][files[0].replace(".svelte", "")];
  const assets = files.map(filename => {
    return {
      name: filename,
      path: "/examples/" + group + "/" + filename
    };
  });

  let cache = false;
  let code = "";
  let showCode = false;

  async function fetchCode(path) {
    if (!code) {
      const res = await fetch(path);
      code = await res.text();
    }
  }
  async function toggleCode() {
    await fetchCode();
    showCode = !showCode;
  }
</script>

<style>
  * :global(.example-box) {
    @apply w-full bg-white shadow rounded;
  }
  * :global(.tabs) {
    @apply bg-blue-800 px-2 py-2 text-white text-right rounded-t;
  }
  * :global(.example) {
    @apply py-4 text-center;
  }
  * :global(.example>*) {
    @apply text-left;
  }
</style>

<div>
  <div class="example-box">
    <div class="text-right bg-gray-200 px-3">
      <div class="inline-block h-8 align-middle"></div>
      <button on:click={toggleCode} class="focus:outline-none h-5 w-5 align-middle bg-white rounded-full ">
        {@html ArrowIcon}
      </button>
    </div>
    <SmoothBox style="transition: height 0.3s; background: #222" widthProp="">
      <Details bind:show={showCode}>
        <ExampleCode {assets} />
      </Details>
    </SmoothBox>
    <div class="example relative" style="height: {height}">
      {#if !fullscreen}
        <Component data-tab="component" />
      {:else}
        <button class="btn solid green" on:click={() => (show = true)}>
          Show example
        </button>
        {#if show}
          <div class="fixed inset-0 bg-white">
            <Component data-tab="component" />
            <button
              class="absolute top-0 right-0"
              on:click={() => (show = false)}>
              Close example
            </button>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>
