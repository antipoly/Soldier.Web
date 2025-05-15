<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import '../app.css'

	let { children } = $props();
</script>

<div class="backdrop">
  <Navbar />

  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  <div class="h-48 w-48"></div>
  {@render children()}
</div>

<style>
  .backdrop {
    position: relative; /* Ensures content is positioned relative to the backdrop */
    z-index: 1; /* Content stays above the backdrop */
  }

  .backdrop::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/Site.svg') no-repeat center center fixed;
    background-size: cover;
    z-index: -1;
    opacity: 0.1;
    pointer-events: none;
  }
</style>