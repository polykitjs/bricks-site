<script>
  import { Menu } from "svelteBricks";
</script>


<h3>Menu</h3>

<Menu>
    <button class="btn outline green" slot="activator">menu</button>
    <div class="bg-white shadow px-4 py-2">
        <ul>
        <li>Entry 1</li>
        <li>Entry 2</li>
        <li>Entry 3</li>
        </ul>
    </div>
</Menu>