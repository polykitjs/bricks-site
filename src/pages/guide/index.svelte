<script>
  import Prism from "svelte-prism";
</script>

<h1>Guide</h1>

<h3>Install</h3>
<Prism language="html" source="npm i @sveltech/bricks" />

<h3>Usage</h3>
<p>See the different components</p>
<h3>Theming</h3>
<p>Components can be styled through classes, slots and styles.</p>
<p>For brevity the examples are styled with Tailwindcss classes, but this is likely to change.</p>

<h3>Support</h3>
<p>The project is still in its early stages and all feedback is very appreciated.</p>
<p>If you have questions, requests or have found a bug, please open an issue on Github</p>


<style>
h1,h3 {@apply mt-4}
/* p {@apply my-4} */
</style>
