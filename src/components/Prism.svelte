<script>
  import { tick } from "svelte";
  export let string, language = "javascript";
  let source, code;

  $: $$props && source && highlightCode();

  async function highlightCode() {
    await tick()
    const grammar = Prism.languages[language];
    code = Prism.highlight(source.textContent, grammar, language);
  }

  function attachSource(e) {
    source = e;
  }
</script>

<code style="display:none" use:attachSource>  
  <slot />    
</code>

<pre>
  <code class="language-{language}">
    {#if code}
      {@html code}
    {:else}
      <slot />
    {/if}
  </code>
</pre>
