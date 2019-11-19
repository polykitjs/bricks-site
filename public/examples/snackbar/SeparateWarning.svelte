<script>
  import { Snackbar } from "svelteBricks";
  function popASnack() {
    console.info({ snack: "Hello" });
  }
  function popAWarning() {
    console.info({
      snack: "I'm a warning message",
      class: "warning"
    });
  }
</script>

<style>
  * :global(.topright) {
    position: fixed;
    top: 20px;
    right: 40px;
  }
  * :global(.snack.warning) {
    background: red;
    color: white;
  }
  * :global(button) {
    @apply px-4 py-2 inline-flex items-center rounded bg-green-600 text-green-100;
  }
</style>

<span>
  <Snackbar />
  <Snackbar
    containerClass="topright"
    filter={msg => msg.class === 'warning'}
    time={0}
    closeable={true} />

  <button on:click={popASnack}>Launch snack</button>
  <button on:click={popAWarning}>Launch warning</button>
</span>
