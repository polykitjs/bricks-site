<script>
  import { Tabs, TabsLink, TabsPage, SmoothBox } from "svelteBricks";
  import Prism from "./Prism.svelte";
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
  <SmoothBox style="transition: height 0.3s">
    <Tabs>
      <div class="h-10 bg-gray-300">
        {#each assets as { name }}
          <TabsLink>{name}</TabsLink>
        {/each}
      </div>

      <div>
        {#each assets as { path }}
          <TabsPage>
            <div use:hydrate data-path={path} />
            <Prism data-tab="code" language="html">{cache[path]}</Prism>
          </TabsPage>
        {/each}
      </div>

    </Tabs>
  </SmoothBox>
</div>
