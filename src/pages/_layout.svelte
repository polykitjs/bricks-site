<script>
  import { SideNav } from "svelteBricks";
  import NavLinks from "./_navLinks.svelte";
</script>

<SideNav widthCollapsed="64px" class="shadow bg-gray-700 text-white" >
  <aside slot="aside" class="">
    <a href="/">
      <h3>Bricks examples</h3>
    </a>
    <NavLinks />
  </aside>
  <slot />
</SideNav>
