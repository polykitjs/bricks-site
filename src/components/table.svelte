<script>
  import {Menu} from 'svelteBricks'
  import DefaultComponent from './DefaultComponent.svelte'
  import Prism from './Prism.svelte'
  export let rows;
  export let width;


$: columns = rows.splice(0,1)[0]

</script>

<style>
  th {
    text-align: left;
    font-weight: bold;
  }
  td:first-child {
    font-weight: bold;
  }
  tr {
    margin-left: -4px;
    margin-right: -4px;
  }
  tr > * {
    padding-left: 4px;
    padding-right: 4px;
  }
  * :global(.menu) {
      @apply bg-white shadow p-4
  }
</style>

<table>
  <thead>
    <tr>
      {#each columns as column}
        <th>{column}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row}
      <tr>
        {#each row as value, i}
          <td style="{width[i]? `width: ${width[i]}`:''}">
          {#if typeof value === 'string'}
            {value}
          {:else}
            <svelte:component this={value.toggle? Menu: DefaultComponent }>            
                <button class="btn sm green outline" slot="activator">
                
                Show
                </button>
                <svelte:component this={value.format ? Prism: DefaultComponent} format={value.format}>
                {value.body}            
                </svelte:component>
            </svelte:component>
          {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

