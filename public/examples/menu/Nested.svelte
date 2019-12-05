<script>
  import { Menu } from "@sveltech/bricks";
</script>

<style>
  li {
    @apply  py-2 text-center;
  }
</style>

<Menu>
  <div class="btn outline green" slot="activator">Open menu</div>
  <ul class="bg-white p4 shadow ">
    <li>Item one</li>
    
      <Menu class="w-full py-2 text-center" yOffset="0" xOffset="100%" openOnHover={true}>
        <div class="w-full" slot="activator" >Hover me</div>
        <ul class="bg-white p4 shadow">
          <li>Item one</li>
          <li>Hover me</li>
          <li>Item three</li>
          <li>Item four</li>
        </ul>
      </Menu>
    
    <li>Item three</li>
    <li>Item four</li>
  </ul>
</Menu>
