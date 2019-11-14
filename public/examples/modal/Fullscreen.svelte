<script>
  import { Modal } from "svelteBricks";
  import { fly } from "svelte/transition";

  let show;
  function close() {
    show = false;
  }
</script>

<Modal bind:show>
  <button class="btn solid green" slot="activator">Fullscreen modal</button>

  <div
    class="absolute inset-0 bg-white p-8"
    transition:fly|local={{ y: window.innerHeight }}>
    <button on:click={close} class="btn outline red">close</button>
    Take a seat
  </div>
</Modal>