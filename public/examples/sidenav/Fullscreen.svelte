<script>
  import { SideNav } from "svelteBricks";
  import Content from "./_content.svelte";
  import NavLinks from "./_navLinks.svelte";

  const config = {};
</script>

<SideNav class="shadow bg-white" {...config} widthMobile="100%">
  <aside slot="aside">
    <h3 class="p-3">Sidebar</h3>
    <NavLinks />
  </aside>
  <main class="bg-gray-100 p-8">
    <Content />
  </main>
</SideNav>
