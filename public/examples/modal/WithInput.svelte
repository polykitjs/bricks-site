<script>
  import { Modal } from "svelteBricks";
  import { fly } from "svelte/transition";
  import { tick } from "svelte";
</script>

<Modal>
  <button class="btn solid green" slot="activator" >
    Modal with form
  </button>
  <div
    class="bg-white w-64 shadow-xl rounded-lg p-8 my-8"
    transition:fly={{ y: -400 }}>
    Modal with form
    <div />
    <input type="text" id="username" class="shadow-inner" autofocus />
  </div>
</Modal>
