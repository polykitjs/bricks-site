<script>
  import { Snackbar } from "@sveltech/bricks";
  function popASnack(){
    console.info({snack: 'Hello'})
  }
</script>

<Snackbar />

<button on:click={popASnack}>Launch snack</button>