<script>
  import { Menu } from "svelteBricks";
  import API from "../../../components/API.svelte";
  import Example from "../../../components/Example.svelte";
  const api = {
    Menu: {
      slots: {
        default: { description: "The default slot." },
        activator: { description: "Activator to toggle menu." }
      },
      props: {
        closeOnClick: ["boolean", "false", "Close the menu if clicked."],
        xOffset: [
          "string",
          "0",
          "Offset menu on the x axis. Activator equals 100%."
        ],
        yOffset: [
          "string",
          "100%",
          "Offset menu on the y axis. Activator equals 100%."
        ],
        xAlign: ["left|right", "left", "Align menu to Activator on x axis."],
        yAlign: ["bottom|top", "top", "Align menu to Activator on y axis."]
      }
    }
  };
</script>

<h3>Menu</h3>

<API {api} />


<h5 class="font-semibold">Unstyled</h5>
<Example group="menu"  files={['Unstyled.svelte']} />

<h5 class="font-semibold">Basic</h5>
<Example group="menu"  files={['Basic.svelte']} />

<h5 class="font-semibold">Nested</h5>
<Example group="menu"  files={['Nested.svelte']} />

<h5 class="font-semibold">Animated</h5>
<Example group="menu"  files={['Animated.svelte']} />

<h5 class="font-semibold">Close on click</h5>
<Example group="menu"  files={['CloseOnClick.svelte']} />