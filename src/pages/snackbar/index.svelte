<script>
  import Example from "../../components/Example.svelte";
  import API from "../../components/API.svelte";
  const api = {
    Snackbar: {
      slots: {
        default: { description: `The default slot.` }
      },
      props: {
        time: [
          "integer",
          "5000",
          "Default snackbar expiration time."
        ],
        template:
          ["component|string","","Default snackbar template. Can be component or name of component in templates."],
        templates: ['object', "{}", "Map of templates"],
        containerClass: [
          "string",
          "",
          "Overrides the default container class"
        ],
        closeable: [
          "boolean",
          "false",
          "Allow the snackbar to be closed manually."
        ],
        reverse: [
          "boolean",
          "false",
          "Reverse the order of displayed snackbars."
        ],
        filter: [
          "false|function",
          "msg => msg.snack",
          "Filter messages to be displayed in this component."
        ],
        passthrough: [
          "boolean",
          "false",
          "Pass the message through to the next function."
        ],
        transition: [
          "string",
          "fade",
          "Transition to be used."
        ],
        
      }
    },
    'console.info': {
      props: {
        snack: ['string', '', 'snack message'],
        time: ['integer', '', 'Timeout for snack. Leave empty to use default timeout. Set to 0 to disable timeout'],
        template: ['string|component', '', 'Template for snackbar. Leave empty to use default template'],
        fn: ['function', '', 'If specified, clicking the snackbar will call the function and close the snackbar.'],
        filter: ['function', 'msg => msg.snack', 'If function returns true, snackbar will be used for the message.'],
        '[custom]':  ['any', '', 'Custom props can be accessed in custom templates']
      }
    }
  };
</script>

<h1 class="font-bold">Snackbar</h1>
<h4>Popup notifications</h4>
<br />

<API {api} />
<br />
<br />

<h5 class="font-semibold">Basic</h5>
<Example group="snackbar" files={["Basic.svelte"]} />

<h5 class="font-semibold">Separate Warning</h5>
<Example group="snackbar" files={["SeparateWarning.svelte"]} />


<h5 class="font-semibold">Custom Template</h5>
<Example group="snackbar" files={["CustomTemplate.svelte", "_myTemplate.svelte"]} />
<br />
<br />
<br />
<br />
<br />
<br />