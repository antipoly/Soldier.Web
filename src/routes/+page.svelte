<script lang="ts">
  const onClick = () => console.log('ok');
</script>

<div class="flex items-center pt-4">
  <!-- Hero Text -->
  <div class="flex flex-col gap-10 min-w-1/2">
    <h2 class="font-poppins font-bold text-[5.2rem] hero-gradient">Cross-Platform Roblox Group Management</h2>
  
    <div class="pl-16 flex flex-col items-center gap-5 w-[36rem]">
      <span class="self-center font-poppins font-[500] text-[1.3rem] text-center">Soldier is the all-in-one stop to manage groups, create events and utilize Roblox assets.</span>
      <button class="self-center font-poppins font-semibold text-xl px-4.5 py-3.5 bg-gradient-to-r from-[#207086] to-[#208686] rounded-[0.6rem] drop-shadow-2xl" on:click={onClick}>Invite Soldier</button>
    </div>
  </div>

  <!-- Demo Screenshot -->
  <div class="flex items-center justify-center h-full w-full mr-16">
    <img src="/Demo.png" alt="Demo screenshot">
  </div>
</div>

<div class="flex">
  
</div>

<div class="h-48 w-48"></div>



<!-- Animations: -->
<!-- Add a bottom fade popup to the hero text, then the demo screenshot -->
<!-- gradient animation on the cta button -->
<!-- hover animations on buttons + fix the pointer effect -->

<style>
  .hero-gradient {
    background: linear-gradient(100deg, #7685D2, #5FCAAA);
    -webkit-background-clip: text; /* Clip the gradient to the text */
    background-clip: text; /* Clip the gradient to the text (compat) */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
  }
</style>