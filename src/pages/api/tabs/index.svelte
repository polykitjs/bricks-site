<script>
  import Example from "../../../components/Example.svelte";
  import API from "../../../components/API.svelte";
  const api = {
    Tabs: {
      slots: {
        default: { description: `The default slot.` }
      },
      props: {}
    },
    TabsLink: {
      slots: {
        default: { description: `The default link slot.` }
      },
      props: {}
    },
    TabsPage: {
      slots: {
        default: { description: `The default page slot.` }
      },
      props: {}
    }
  };
</script>

<div class="p-20">
  <API {api} />

</div>
