<script>
  import Example from "../../../components/Example.svelte";
  import API from "../../../components/API.svelte";
  const api = {
    SmoothBox: {
      slots: {
        default: { description: `The default slot.` }
      },
      props: {
        active: [
          "boolean",
          "true",
          "Enable transitions."
        ],
        widthProp: [
          "string",
          "width",
          "The CSS prop which the width is applied."
        ],
        heightProp: [
          "string",
          "height",
          "The CSS prop which the height is applied."
        ],
        slotHeight: [
          "string",
          "inherited",
          "The initial height."
        ],
        slotWidth: [
          "string",
          "inherited",
          "The initial width."
        ],
        startTime: [
          "integer",
          "0",
          "Delay transition activation. Provides a buffer for async calls."
        ],
        endTime: [
          "integer",
          "0",
          "Disable transitions after the specified time."
        ],
        
      }
    }
  };
</script>



<h1 class="font-bold">SmoothBox</h1>
<h4>Transitions for dynamic content.</h4>
<br />

<API {api} />
<br />
<br />

<h5 class="font-semibold">Basic</h5>
<Example group="smoothbox" files={["Basic.svelte"]} />
<br />
<br />
<br />
<br />
<br />
<br />