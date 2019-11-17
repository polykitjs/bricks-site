<script>
  import Example from "../../components/Example.svelte";
  import API from "../../components/API.svelte";
  const api = {
    Details: {
      slots: {
        default: { description: `The default slot.` },
        activator: { description: `The activator slot to show the Details.` },
        deactivator: { description: `The activator slot to hide the details.` }
      },
      props: {
        show: ["boolean", "true", "Enable transitions."]
      }
    }
  };
</script>

<h1 class="font-bold">Details</h1>
<h4>Expand and collapse content.</h4>
<br />

<API {api} />
<br />
<br />

<h5 class="font-semibold">Unstyled</h5>
<Example group="details" files={['Unstyled.svelte']} />
<br />
<br />
<br />
<br />
<br />
<br />
