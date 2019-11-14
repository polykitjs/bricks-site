<script>
  import { Snackbar, Details } from "svelteBricks";
  import Advanced from "./advanced.md";
  import stringify from "stringify-object";
  import PrismComponent from "../../components/Prism.svelte";

  const customSnackbar = {
    filter: msg => msg.class === "warning",
    containerClass: "topright"
  };

  const customMessages = [
    { snack: "Basic message" },
    { snack: "With warning class message", class: "warning" },
    { snack: "Closeable message", time: 0, closeable: true },
    {
      snack: "Function message",
      time: 0,
      fn: () => {
        alert("hello");
      }
    }
  ];

  setTimeout(() => {
    Prism.highlightAll();
  });
</script>

<style>
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

<div>

  <div>
    <ul>
      {#each customMessages as msg, i}
        <li class="my-2">
          <button class="btn solid green" on:click={() => console.info(msg)}>
            {msg.snack.replace(/ message/, '')}
          </button>
          <Details showText="show" hideText="hide">
            <PrismComponent>console.info({stringify(msg)})</PrismComponent>
          </Details>
        </li>
      {/each}
    </ul>
  </div>

  <Advanced />

  <Snackbar />
  <Snackbar {...customSnackbar} />

</div>
