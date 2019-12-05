<script>
  import { Snackbar } from "@sveltech/bricks";
  import MyTemplate from "./_myTemplate.svelte";
  function popASnack() {
    const message = {};
    console.info({
      snack: "A custom snack message",
      template: MyTemplate,
      actions: {
        CANCEL() {
          this.close();
        },
        "SAY HELLO": () => alert("Hello!")
      }
    });
  }
</script>

<!--intercept messages with an actions prop-->
<Snackbar filter={msg=>msg.actions} time={0} />

<button class="btn solid green" on:click={popASnack}>Launch snack</button>
