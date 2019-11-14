<script>
  import { Modal } from "svelteBricks";
  import { fly } from "svelte/transition";
</script>

<Modal>
  <button class="btn solid green" slot="activator">Show modal</button>
  <div
    class="bg-white shadow-xl rounded-lg h-64 p-8" style="width:500px"
    transition:fly={{ y: -400 }}>
    <div class="pb-4">Why hello!</div>

    <Modal>
      <button class="btn solid green" slot="activator">Show new modal</button>
      <div
        class="bg-white w-64 shadow-xl rounded-lg h-24 p-8"
        transition:fly={{ x: -400 }}>
        Basic modal
      </div>
    </Modal>

  </div>
</Modal>
