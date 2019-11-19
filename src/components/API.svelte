<script>
  import { tick } from "svelte";
  import { Tabs, TabsLink, TabsPage, Menu, SmoothBox } from "svelteBricks";
  import { slide, fly } from "svelte/transition";
  import AngleDownIcon from "@iconscout/unicons/svg/angle-down.svg";
  import ComponentIcon from "@iconscout/unicons/svg/layer-group.svg";
  export let api;
  let activeApiKey = Object.keys(api)[0];
  $: activeApi = api[activeApiKey];

  let tabWindowHeight;
  let readyForTransition = false;
  setTimeout(() => (readyForTransition = true), 200);
</script>

<style>
  .api-links {
    @apply w-32 flex-shrink-0;
  }
  * :global(.api-links > button) {
    @apply block w-full text-center py-3 uppercase font-semibold text-gray-600 border-b border-gray-300 outline-none;
  }
  * :global(.api-links > button.selected) {
    @apply bg-gray-100 text-gray-900;
  }
  * :global(.pages) {
    transition: height 0.3s;
    @apply flex-auto relative overflow-hidden;
  }

  .prop {
    @apply pb-1 px-3 border-b border-gray-300;
  }
  .prop:last-of-type {
    @apply border-none;
  }

  .prop > .name {
    @apply font-bold;
  }
  .prop > * {
    @apply my-2;
  }

  * :global(.expand-icon) {
    transition: transform 0.2s;
  }
  * :global(.show .expand-icon) {
    transform: rotate(180deg);
  }
</style>

<div class="pb-2">
  <h3>API</h3>
  <h6>Please review props and slots for all components below.</h6>
</div>
<div class="bg-gray-600 px-4 py-3 text-white text-lg relative z-10">
  <!-- <span class="text-gray-300 font-bold uppercase text-xs align-middle">Component:</span> -->
  <button class="fill-current w-4 align-middle">
    {@html ComponentIcon}
  </button>
  <Menu closeOnClick={true}>
    <span slot="activator" class="border-b-2 pb-1 ">
      <span class="align-middle">{activeApiKey}</span>
      <button class="fill-current w-6 align-middle expand-icon">
        {@html AngleDownIcon}
      </button>
    </span>
    <ul
      class="relative z-10 bg-white shadow text-gray-900"
      transition:slide|local>
      {#each Object.keys(api) as componentName}
        <li
          class="cursor-pointer px-3 py-2 hover:bg-gray-100"
          on:click={() => (activeApiKey = componentName)}>
          {componentName}
        </li>
      {/each}
    </ul>
  </Menu>

</div>
<div class="bg-white">
  <Tabs class="flex shadow">
    <aside class="api-links">
      <TabsLink>Props</TabsLink>
      {#if activeApi.slots}
        <TabsLink>Slots</TabsLink>
      {/if}
    </aside>
    <SmoothBox class="pages" widthProp={false} startTime={200}>

      <TabsPage>
        <div transition:fly|local={{ x: 300 }} class="pb-5">
          <ul class="flex flex-wrap mx-3 mt-2 text-xs text-gray-700 font-bold">
            <li class="w-56">Name</li>
            <li class="flex-auto">Type</li>
            <li class="w-1/3">Default value</li>
          </ul>
          <ul>
            {#each Object.entries(activeApi.props) as [name, [type, defaultValue, description]]}
              <li class="flex flex-wrap prop">
                <div class="w-56 name">{name}</div>
                <div class="flex-auto type text-gray-600">{type}</div>
                <div class="w-1/3 default overflow-hidden text-gray-600">
                  {defaultValue}
                </div>
                <div class="w-full">
                  {@html description}
                </div>
              </li>
            {/each}
          </ul>
        </div>

      </TabsPage>
      <TabsPage>

        <div transition:fly|local={{ x: -300 }} class="pb-5">
          <ul class="px-3 my-2">
            {#each Object.entries(activeApi.slots) as [name, slot]}
              <li>{name} {slot.description}</li>
            {/each}
          </ul>
        </div>

      </TabsPage>

    </SmoothBox>
  </Tabs>
</div>
