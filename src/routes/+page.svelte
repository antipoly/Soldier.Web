<script lang="ts">
  const features = [
  { text: "User friendly by design.", icon: "star" },
  { text: "Ultimate secure ranking.", icon: "lock" },
  { text: "Built with the speed of Rust.", icon: "bolt" }
]
</script>

<div class="flex justify-between items-center pt-4">
  <!-- Hero Text -->
  <div class="mt-5 flex flex-col gap-10 w-[35rem]">
    <h2 class="font-poppins font-bold text-[4.3rem] hero-gradient">Cross-Platform Roblox Group Management</h2>
  
    <div class="pl-2 flex flex-col items-center gap-5 w-[36rem]">
      <span class="self-center font-poppins font-[500] text-[1.3rem] text-center">Soldier is the all-in-one stop to manage groups, create events and utilize Roblox assets.</span>
      <button class="self-center font-poppins font-semibold text-xl px-4.5 py-3.5 bg-gradient-to-r from-[#1E697E] to-[#1D7777] rounded-[0.6rem] drop-shadow-2xl">Invite Soldier</button>
    </div>
  </div>

  <!-- Demo Screenshot -->
  <div class="flex items-center justify-center h-full w-[36rem]">
    <img src="/command-demo.png" alt="Demo screenshot">
  </div>
</div>

<div class="mt-36 flex justify-between">
  <div class="flex items-center justify-center w-[500px] h-[498px] relative">
    <div class="absolute inset-0 z-0 grid-bg"></div> <!-- Grid Background -->
    <img src="/logo/Soldier@623x741.png" class="relative z-10 logo-glow w-[324px] h-[384px]" draggable="false" alt="" />
  </div>

  <div class="flex items-center flex-col gap-7">
    <span class="font-poppins font-semibold text-4xl">About</span>
    <div class="px-12 py-8 w-[37rem] rounded-xl bg-[#33394a4a]">
      <span class="font-poppins font-[500] text-2xl">Soldier was built to surpass expectations</span>

      <div class="mt-10 flex flex-col gap-3">
        {#each features as feature}
          <div class="flex gap-10 items-center">
            <img class="w-[60px] h-[60px]" src="/icons/{feature.icon}.png" alt="">
            <span class="font-poppins text-2xl">{feature.text}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div class="h-48 w-48"></div>



<!-- Animations: -->
<!-- Add a bottom fade popup to the hero text, then the demo screenshot -->
<!-- gradient animation on the cta button -->
<!-- hover animations on buttons + fix the pointer effect -->

<style>
  .hero-gradient {
    background: linear-gradient(100deg, #414E94, #49a086);
    -webkit-background-clip: text; /* Clip the gradient to the text */
    background-clip: text; /* Clip the gradient to the text (compat) */
    -webkit-text-fill-color: transparent; /* Make the text transparent to show the gradient */
  }

  .logo-glow {
    filter: drop-shadow(80px 40px 40px #63b5ab28);
    opacity: 0.7;
  }

  .grid-bg {
    width: 100%;
    height: 100%;
    background:
      linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
    background-size: 45px 45px;
    background-position: 22.5px 22.5px;
    pointer-events: none;
    user-select: none;
  }
</style>