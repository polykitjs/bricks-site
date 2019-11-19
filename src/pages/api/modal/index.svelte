<script>
  import Example from "../../../components/Example.svelte";
  import API from "../../../components/API.svelte";
  const api = {
    Modal: {
      slots: {
        default: { description: `The default slot.` },
        backdrop: { description: `Backdrop slot.` }
      },
      props: {
        backdropCSS: [
          "string",
          "background-color: #000; opacity: 0.2",
          "CSS applied to default backdrop."
        ],
        show: [
          "boolean",
          "false",
          "Show the modal. Bind for programmatic access."
        ],
        onClose: [
          "false|function",
          "false",
          "Function to run instead of closing when clicking the default backdrop."
        ]
      }
    }
  };
</script>

<h1 class="font-bold">Modal</h1>
<h4>A window displayed on top of the current page</h4>
<br />

<API {api} />
<br />
<br />

<h3 class="font-semibold">Examples</h3>

<h5 class="font-semibold">Unstyled</h5>
<Example group="modal" files={["Unstyled.svelte"]} />
<br />

<h5 class="font-semibold">Styled</h5>
<Example group="modal" files={["Styled.svelte"]} />
<br />

<h5 class="font-semibold">With input</h5>
<Example group="modal" files={["WithInput.svelte"]} />
<br />

<h5 class="font-semibold">Nested</h5>
<Example group="modal" files={["Nested.svelte"]} />
<br />

<h5 class="font-semibold">Fullscreen</h5>
<Example group="modal" files={["Fullscreen.svelte"]} />
