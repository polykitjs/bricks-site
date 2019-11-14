```html
<script>
  import { Snackbar } from "svelteBricks";

  const customSnackbar = {
    filter: msg => msg.class === "warning",
    containerClass: "topright"
  };
</script>

<div>
    <Snackbar />
    <Snackbar {...customSnackbar} />
</div>

<style>
  <!-- global prevents the class from getting pruned -->
  * :global(.topright) { 
    position: fixed;
    top: 20px;
    right: 40px;
  }
  * :global(.warning) {
    background: red;
    color: #fff;
  }
</style>
```