<style>
  h1 {
    @apply text-6xl;
  }
  h3 {
    @apply text-4xl;
  }
  @screen sm {
    p {
      @apply text-lg;
    }
  }
  @screen md {
    p {
      @apply text-xl;
    }
  }
  p {
    @apply my-4;
  }
</style>

<div class="max-w-3xl m-auto">
  <h1>Bricks</h1>
  <h3>Unstyled components for Svelte.</h3>

  <div>
    <p>
      There are plenty of CSS frameworks and prestyled components libraries.
      They're great for prototypes, MVPs and projects that adhere to a strict
      design specification.
    </p>
    <p>
      Often however, they're constraining and end up working against you, as your app outgrows their scale
      and style.
    </p>
    <p>
      Bricks aims to separate functionality from style. It does so by shipping
      with only the style required for components to remain functional. The
      components can then be extended and styled with CSS and {'<slots>'}.
    </p>
  </div>
</div>
