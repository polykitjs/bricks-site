<script>
  const links = [
    { path: "/sidenav", name: "Sidenav" },
    { path: "/modal", name: "Modal" },
    { path: "/menu", name: "Menu" },
    { path: "/tabs", name: "Tabs" },
    {
      path: "/snackbar",
      name: "Snackbar",
      children: [
        { path: "/snackbar/advanced", name: "Advanced" }
      ]
    }
  ];
</script>

<div class="pt-4">
  {#each links as link}
    <div>
      <a href={link.path}>{link.name}</a>
      {#if link.children}
        {#each link.children as child}
        <div class="pl-1">
          <a href={child.path}>- {child.name}</a>
        </div>
        {/each}
      {/if}
    </div>
  {/each}
</div>
