<script>
  import { Snackbar } from "svelteBricks";
  function popASnack(){
    console.info({snack: 'Hello'})
  }
</script>

<Snackbar />

<button on:click={popASnack}>Launch snack</button>