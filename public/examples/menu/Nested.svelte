<script>
  import { Menu } from "svelteBricks";
</script>

<style>
  li {
    @apply -mx-4 py-2 text-center;
  }
</style>

<Menu>
  <div class="btn outline green" slot="activator">Open menu</div>
  <ul class="bg-white p4 shadow">
    <li>Item one</li>
    <li>
      <Menu xOffset="100%" openOnHover={true}>
        <div class="" slot="activator" >Hover me</div>
        <ul class="bg-white p4 shadow">
          <li>Item one</li>
          <li>Hover me</li>
          <li>Item three</li>
          <li>Item four</li>
        </ul>
      </Menu>
    </li>
    <li>Item three</li>
    <li>Item four</li>
  </ul>
</Menu>
