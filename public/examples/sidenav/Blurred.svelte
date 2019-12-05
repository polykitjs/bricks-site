<script>
  import { SideNav } from "@sveltech/bricks";
  import Content from "./_content.svelte";
  import NavLinks from "./_navLinks.svelte";

  const config = {
    mainEffectCSS: "filter: blur(4px);",
    mainEffectCSSMobile: "filter: blur(4px);",
    mainMode: "cover",
    backdropCSS: "/**anything here to render a clickable backdrop**/"
  };
</script>

<SideNav class="shadow bg-white" {...config}>
  <aside slot="aside">
    <h3 class="p-3">Sidebar</h3>
    <NavLinks />
  </aside>
  <main class="bg-gray-100 h-full p-8">
    <Content />
  </main>
</SideNav>
