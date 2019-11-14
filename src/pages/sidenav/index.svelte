<script>
  import Example from "../../components/Example.svelte";
  import API from "../../components/API.svelte";
  const api = {
    Modal: {
      slots: {
        default: { description: `The default slot.` },
        backdrop: { description: `Backdrop slot.` },
        aside: { description: `Sidebar slot.` },
        activator: { description: `Activator to toggle the sidebar.` }
      },
      props: {
        show: [
          "boolean",
          "true",
          "Show the sidebar. Bind for programmatic access."
        ],
        showOnMobile: ["boolean", "false", "Mobile equivalent"],
        classPrefix: [
          "string",
          "",
          "Prefix component for greater control of nested elements."
        ],
        backdropCSS: ["string", "", "Leave empty for no backdrop."],
        backdropCSSMobile: [
          "string",
          "background-color: #000; opacity: 0.2;",
          "Mobile equivalent"
        ],
        align: ["left|right", "left", "Align sidebar."],
        breakpoint: [
          "string",
          "768px",
          "Breakpoint for mobile/desktop layout."
        ],
        width: ["string", "256px", "Sidebar CSS width"],
        widthMobile: ["string", "", ""],
        widthCollapsed: [
          "string",
          "",
          'CSS width. Must be specified for collapseMode: "mask".'
        ],
        widthCollapsedMobile: [
          "string",
          "<widthCollapsed>",
          "Mobile equivalent"
        ],
        collapseMode: ["slide|mask", "slide", "Slideout sidenav or mask it."],
        collapseModeMobile: [
          "slide|mask",
          "<collapseMode>",
          "Mobile equivalent"
        ],
        mainMode: ["shrink|cover|slide", "shrink", "Main content area."],
        mainModeMobile: ["cover|shrink|slide", "cover", "Mobile equivalent"],
        mainEffectCSS: [
          "string",
          "",
          "CSS applied to content element when sidebar is open"
        ],
        mainEffectCSSMobile: ["string", "", "Mobile equivalent"],
        transition: [
          "string",
          "all 0.3s",
          "Transition for sidenav, content area and activator."
        ],
        activatorMode: [
          "outside|follow|static",
          "outside",
          "Activator position. <i>outside</i> will anchor the activator outside the sidebar, when the sidebar is closed. <i>follow</i> will anchor the activator to the edge of the sidebar. <i>static</i> will anchor the activator to the corner of the screen."
        ],
        activatorModeMobile: [
          "outside|follow|static",
          "<activatorMode>",
          "Mobile equivalent"
        ]
      }
    }
  };

</script>

<h1 class="font-bold">Sidenav</h1>
<h4>A window displayed on top of the current page</h4>
<br />

<!-- <API {api} /> -->
<br />
<br />


<h5 class="font-semibold">Unstyled</h5>
<Example group="sidenav" height="400px" files={['Unstyled.svelte']}  />


<h5 class="font-semibold">Basic</h5>
<Example group="sidenav"  height="400px" files={['Basic.svelte', '_content.svelte', '_navLinks.svelte']} />