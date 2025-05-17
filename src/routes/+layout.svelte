<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import '../app.css'

	let { children } = $props();
</script>

<div class="backdrop">
  <Navbar />

  <div class="mt-14 ml-24 mr-16">
    {@render children()}
  </div>
</div>

<style>
  .backdrop {
    position: relative; /* Ensures content is positioned relative to the backdrop */
    z-index: 1; /* Content stays above the backdrop */
    max-height: 100vh;
  }

  .backdrop::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(to bottom, rgba(26,26,30,0) 75%, var(--page-bg, #1A1A1E) 100%),
      url('/Site.svg') no-repeat center center fixed;
    background-size: cover;
    z-index: -1;
    opacity: 0.05;
    pointer-events: none;
  }
</style>