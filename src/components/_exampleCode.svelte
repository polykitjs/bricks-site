<script>
  import { Tabs, TabsLink, TabsPage, SmoothBox } from "@sveltech/bricks";
  import Prism from "svelte-prism";
  export let assets;

  const cache = {};
  async function hydrate(e) {
    const path = e.dataset.path;
    if (!cache[path]) {
      console.log("hydrating");
      const res = await fetch(path);
      cache[path] = await res.text();
    }
  }
</script>

<div>
  <Tabs>
    <div class="bg-gray-600 text-white">
      {#each assets as { name }}
        <TabsLink class="my-2 py-1 mx-3 tabslink">{name}</TabsLink>
      {/each}
    </div>

    <div>
      {#each assets as { path }}
        <TabsPage>
          <div use:hydrate data-path={path} />
          {#if cache[path]}
            <Prism data-tab="code" language="svelte">{cache[path]}</Prism>
          {/if}
          <!-- <Prism data-tab="code" language="html" source="{cache[path]}"></Prism> -->
        </TabsPage>
      {/each}
    </div>

  </Tabs>
</div>


<style>
* :global(.tabslink.selected) {
  @apply border-b-2 border-white
}
</style>