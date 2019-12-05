<script>
  import { getContext } from "svelte";

  import { SideNav } from "@sveltech/bricks";
  import NavLinks from "./_navLinks.svelte";
</script>

<SideNav
  class="shadow bg-gray-700 text-white overflow-y-auto overflow-x-hidden">
  <aside slot="aside" class="">
    <a href="/">
      <h3>Bricks examples</h3>
    </a>
    <NavLinks />
  </aside>
  <slot foo={'bar'} scoped={{ scopedProp: 'bar', foo: 'baz' }} />
</SideNav>
