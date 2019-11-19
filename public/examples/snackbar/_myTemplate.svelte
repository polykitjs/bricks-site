<script>
  import { fly } from "svelte/transition";
  export let msg;
</script>

<style>
  .snack {
    position: relative;
    display: inline-block;
    color: white;
    background: #222;
    padding: 4px 32px 4px 40px;
    margin-top: 12px;
    font-size: 1.5rem;
    border-radius: 8px;
  }
  .strip {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: purple;
    left: 0;
    top: 0;
    bottom: 0;
    width: 20px;
    position: absolute;
  }
  .close {
    padding: 8px;
  }
  .actions {
    text-align: right;
  }
  .actions > * {
    margin-left: 20px;
    color: #f958f9;
    cursor: pointer;
  }
</style>

<div transition:fly class="snack {msg.class || ''}">
  <div class="strip" />
  {msg.snack}
  {#if msg.closeable}
    <span class="close" on:click={() => msg.close()}>x</span>
  {:else if msg.actions}
    <div class="actions">
      {#each Object.entries(msg.actions) as [name, fn]}
        <span on:click={()=>fn.bind(msg)()}>{name}</span>
      {/each}
    </div>
  {/if}
</div>
