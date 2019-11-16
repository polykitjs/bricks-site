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
    <li>Item two</li>
    <li>Item three</li>
    <li>Item four</li>
  </ul>
</Menu>
