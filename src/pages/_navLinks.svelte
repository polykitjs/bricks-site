<script>
  import { Details } from "svelteBricks";
  export let route;

  import TextIcon from "@iconscout/unicons/svg/book-open.svg";
  import RulerIcon from "@iconscout/unicons/svg/ruler-combined.svg";
  import LayerIcon from "@iconscout/unicons/svg/layer-group.svg";
  import SuitcaseIcon from "@iconscout/unicons/svg/suitcase-alt.svg";
  import FolderIcon from "@iconscout/unicons/svg/folder.svg";

  const links = [
    { path: "/introduction", name: "Introduction", icon: TextIcon },
    { path: "/guide", name: "Guide", icon: RulerIcon },
    {
      name: "API",
      icon: LayerIcon,
      children: [
        { path: "/api/sidenav", name: "Sidenav" },
        { path: "/api/modal", name: "Modal" },
        { path: "/api/menu", name: "Menu" },
        { path: "/api/tabs", name: "Tabs" },
        { path: "/api/details", name: "Details" },
        { path: "/api/smoothbox", name: "SmoothBox" },
        { path: "/api/snackbar", name: "Snackbar" }
      ]
    }
  ];

  function selected(link, route) {
    return (route && route.path.includes(link.path) && "selected") || "";
  }
</script>

<style>
  a.selected {
    @apply bg-gray-600;
  }
  a.link {
    @apply block fill-current cursor-pointer;
  }
  a.link:hover {
    @apply bg-gray-600;
  }
</style>

<div class="mt-4 border-t border-gray-600 ">
  {#each links as link, i}
    <a

      on:click={()=>{link.hideChildren = !link.hideChildren}}
      href={link.path}
      class="link border-b border-gray-600 {selected(link, route)}">
      <div class="h-16 inline-block align-middle" />
      {#if link.icon}
        <span class="px-5 inline-block align-middle " style="width:64px;">
          {@html link.icon}
        </span>
      {/if}
      <span class="align-middle inline-block {link.icon ? '' : 'pl-5'}">
        {link.name}
      </span>
    </a>

    {#if link.children}
      <Details show={!link.hideChildren}>
        <div class="subnav">
          {#each link.children as link}
            <a
              href={link.path}
              style="padding-left:64px"
              class="link {selected(link, route)}">
              <div class="h-16 inline-block align-middle" />
              {link.name}
            </a>
          {/each}
        </div>
      </Details>
    {/if}
  {/each}
</div>
