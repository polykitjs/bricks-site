<script>
  export let options = [],
    value,
    placeholder;

  $: normalizedOptions = (() => {
    if (Array.isArray(options))
      return options.map(option => {
        return typeof option === "object"
          ? option
          : { name: option, value: option };
      });
    else return Object.entries(options).map(([name, value]) => ({name, value}))
  })();
</script>

<select bind:value>
  {#each normalizedOptions as item}
    <option value={item.value}>{item.name}</option>
  {/each}
</select>
