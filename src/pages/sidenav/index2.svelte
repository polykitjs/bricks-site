<script>
  import Prism from "../../components/Prism.svelte";
  import { SideNav } from "svelteBricks";
  import NavLinks from "./_navLinks.svelte";
  import {
    diffedFromDefaults,
    normalizeOptions,
    getDefaultOptions
  } from "../../utils.js";
  import Dropdown from "../../components/inputs/Dropdown.svelte";
  import Switch from "../../components/inputs/Switch.svelte";
  import Text from "../../components/inputs/Text.svelte";

  const fullscreen = false;

  const inputs = { array: Dropdown, bool: Switch, string: Text };

  const options = normalizeOptions({
    show: [[true, false], "Show on desktop."],
    showOnMobile: [[false, true], "Show on mobile."],
    classPrefix: [
      "",
      "Prefix component for greater control of nested elements."
    ],
    backdropCSS: ["", "Leave empty for no backdrop."],
    backdropCSSMobile: [
      "background-color: #000; opacity: 0.2;",
      "Leave empty for no backdrop."
    ],
    align: [["left", "right"], "Align sidebar."],
    breakpoint: ["768px", "Breakpoint for mobile/desktop layout."],
    width: ["256px", "Sidebar width"],
    widthMobile: ["", 'Defaults to "width"'],
    widthCollapsed: ["0px", 'Must be specified for collapseMode: "mask".'],
    widthCollapsedMobile: ["", 'Defaults to "widthCollapsed".'],
    collapseMode: [["slide", "mask"], "Slideout sidenav or mask it."],
    collapseModeMobile: [
      ["", "slide", "mask"],
      "Defaults to collapseModeMobile."
    ],
    mainMode: [["shrink", "cover", "slide"], "Main content area."],
    mainModeMobile: [["cover", "shrink", "slide"], "Main content area."],
    mainEffectCSS: ["", "CSS applied to content element when sidebar is open"],
    mainEffectCSSMobile: [
      "",
      "CSS applied to content element when sidebar is open"
    ],
    transition: [
      "all 0.3s",
      "Transition for sidenav, content area and activator."
    ],
    activatorMode: [["outside", "follow", "static"], "Activator position."],
    activatorModeMobile: [
      ["", "outside", "follow", "static"],
      'Activator position. Defaults to "activatorMode"'
    ]
  });

  let config = getDefaultOptions(options);

  const presets = {
    ["none"]: { ...config },
    ["blur desktop"]: {
      ...config,
      mainEffectCSS: "filter: blur(4px);",
      mainMode: "cover",
      backdropCSS: "/**anything here to render backdrop**/"
    },
    ["mobile fullscreen"]: { ...config, widthMobile: "100%" },
    ["icons"]: {
      ...config,
      widthCollapsed: "64px",
      collapseMode: "mask",
      activatorMode: "follow"
    },
    ["icons right"]: {
      ...config,
      align: "right",
      widthCollapsed: "64px",
      activatorMode: "follow"
    }
  };

  $: diffedConfig = diffedFromDefaults(config, options);
</script>

<style>
  :global(.options-sandbox) input[type="text"] {
    @apply border-b border-gray-400 rounded-none px-2 py-1 bg-transparent;
  }
  :global(.options-sandbox) input[type="text"]:focus,
  :global(.options-sandbox) input[type="text"]:hover {
    @apply shadow-none bg-white;
  }
  :global(.options-sandbox > *) {
    @apply my-2;
  }

  :global(.options-sandbox) .input * {
    @apply text-gray-500;
  }

  :global(.options-sandbox) .input.dirty {
  }
  :global(.options-sandbox) .input.dirty * {
    @apply text-gray-900 font-semibold;
  }
</style>

<div class={fullscreen ? 'inset-0 fixed z-20 bg-gray-100' : ''}>
  <SideNav class="shadow bg-white" {...config}>
    <aside slot="aside" class=" py-8 px-3">
      <a href="/">
        <h3>Sidenav</h3>
      </a>
      <NavLinks />
    </aside>
    <main class="p-20">
      <h3>Preset</h3>
      <Dropdown options={presets} bind:value={config} />

      <ul>
        <li>
          <Switch value={fullscreen} />
        </li>
      </ul>
      <ul class="options-sandbox">
        {#each Object.entries(options) as [key, option]}
          <li>
            <span
              class="w-48 inline-block text-right pr-2 font-semibold
              text-gray-700">
              {key}
            </span>
            <span
              class="w-48 inline-block input {diffedConfig[key] ? 'dirty' : ''}">
              <svelte:component
                this={inputs[option.type]}
                bind:value={config[key]}
                options={option.options} />
            </span>
            <span class="w-56 inline-block text-gray-600 text-sm">
              {option.description || ''}
            </span>
          </li>
        {/each}
      </ul>
      <Prism language="html">
        {`<` + `script>
  const config = ${JSON.stringify(diffedConfig, 0, 2)}
</script>

<SideNav class="shadow bg-white" {...config}>
  <aside slot="aside">
    <h3>Sidenav</h3>
    ...
  </aside>
  <slot>
    <!--content-->
  </slot>
</SideNav>
`}
      </Prism>

    </main>
  </SideNav>
</div>
