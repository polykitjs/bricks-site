<script>
  import { tick } from "svelte";
  export let string = '', language = "javascript";
  let source, formattedCode;

  $: $$props && source && highlightCode();

  async function highlightCode() {
    await tick()
    const grammar = Prism.languages[language];
    formattedCode = Prism.highlight(source.textContent, grammar, language);
  }

  function attachSource(e) {
    source = e;
  }
</script>

<code style="display:none" use:attachSource>  
  <slot />    
</code>

<pre class="language-{language}" style="border-radius: 0; margin: 0;">
  <code class="language-{language}">
    {#if formattedCode}
      {@html formattedCode}
    {:else}
      <slot />
    {/if}
  </code>
</pre>
