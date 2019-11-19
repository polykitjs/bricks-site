<script>
  const links = [
    { path: "/api/sidenav", name: "Sidenav" },
    { path: "/api/modal", name: "Modal" },
    { path: "/api/menu", name: "Menu" },
    { path: "/api/tabs", name: "Tabs" },
    { path: "/api/details", name: "Details" },
    { path: "/api/smoothbox", name: "SmoothBox" },
    { path: "/api/snackbar", name: "Snackbar" }
  ];
</script>

<div class="pt-4 -mx-3 border-b border-gray-300">
  {#each links as link}
    <a href="#!" class="block hover:bg-gray-300 border-t border-gray-300">
      <span class="p-5 inline-block align-middle" style="width:64px;">
        {#if link.icon}
          {@html link.icon}
        {/if}
      </span>
      <span class="align-middle">{link.name}</span>
    </a>
  {/each}
</div>
