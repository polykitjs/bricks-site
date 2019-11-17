<script>
  import Example from "../../components/Example.svelte";
  import API from "../../components/API.svelte";
  const api = {
    SmoothBox: {
      slots: {
        default: { description: `The default slot.` }
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

<h1 class="font-bold">SmoothBox</h1>
<h4>Transitions for dynamic content.</h4>
<br />

<!-- <API {api} />
<br />
<br /> -->

<h5 class="font-semibold">Basic</h5>
<Example group="smoothbox" files={["Basic.svelte"]} />
