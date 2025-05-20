<script lang="ts">
  import Icon from "@iconify/svelte";
  import * as Carousel from "$lib/components/ui/carousel/index";
  import { type CarouselAPI } from "$lib/components/ui/carousel/context";
  
  interface Feature {
    title: string;
    description: string;
    icon: string;
    color: string;
  }

  const atAGlance = [
    { text: "User friendly by design.", icon: "star" },
    { text: "Ultimate secure ranking.", icon: "lock" },
    { text: "Built with the speed of Rust.", icon: "bolt" }
  ];

  const features: Feature[] = [
    { title: "Access Hierarchy", description: "Only allow trusted members with high privileges through Soldier.", icon: "streamline:hierarchy-2-solid", color: "#36A953" },
    { title: "Secure Ranking", description: "Manage your group member's ranks securely and conveniently on Discord.", icon: "ion:shield-checkmark", color: "#36A2A9" },
    { title: "Custom Xp Levels", description: "Allow your group members to advance through ranks as they earn xp, completely controlled and configured by you.", icon: "vaadin:diamond", color: "#7DA936" },
    { title: "Award Management", description: "Award your group members with a cosmetic badge for their dedication to your group.", icon: "fluent-emoji-high-contrast:military-medal", color: "#8B36A9" },
    { title: "Event Management", description: "Create events that are managed by Soldier to bulk reward users who complete them.", icon: "ion:calendar-sharp", color: "#A93D36" },
    { title: "Configurable Ranklocks", description: "Disallow members from reaching certain ranks or rank ranges.", icon: "uis:padlock", color: "#3642A9" },
  ];

  let api = $state<CarouselAPI>();
  let current = $state(0);
  const count = $derived(api ? api.scrollSnapList().length : 0);
  
  
  $effect(() => {
    if (api) {
      current = api.selectedScrollSnap();
      api.on("select", () => {
        current = api!.selectedScrollSnap();
        console.log('1');
      });
    }
  });
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

  <div class="flex items-center justify-center flex-col gap-7">
    <span class="font-poppins font-semibold text-4xl" id="about">About</span>
    <div class="px-12 py-8 w-[35rem] rounded-xl bg-[#33394a4a]">
      <span class="font-poppins font-[500] text-xl">Soldier was built to surpass expectations...</span>

      <div class="mt-10 flex flex-col gap-3">
        {#each atAGlance as feature}
          <div class="flex gap-10 items-center">
            <img class="w-[45px] h-[645x]" src="/icons/{feature.icon}.png" alt="">
            <span class="font-poppins text-xl">{feature.text}</span>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<h2 class="my-16 font-poppins font-semibold text-4xl text-center" id="features">Features</h2>

<div class="flex justify-center">
  <div class="relative h-[60dvh] w-[80%] rounded-2xl flex flex-col items-center">
    <div class="absolute bg-gradient-to-br from-[#1c212679] to-[#1d232b79] -inset-5 -z-10 rounded-[7rem] blur-lg"></div>
    <div class="flex flex-col items-start justify-center w-60 gap-10">
      <Carousel.Root setApi={(emblaApi) => (api = emblaApi)} class="w-full" opts={{
        align: "center",
        loop: true,
      }}>
      <Carousel.Content>
        {#each features as feature, i (i)}
          <Carousel.Item class="">
            <div
              class="flex items-center gap-5 flex-col h-60 w-60 rounded-lg py-7 px-8"
              style="background: linear-gradient(180deg, {feature.color}c8, {feature.color}14)"
            >
              <Icon icon={feature.icon} color="#a1a1a1" width="100" height="100"  />
              <span class="text-center font-poppins font-semibold text-2xl text-normal">{feature.title}</span>
            </div>
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <!-- <Carousel.Previous />
      <Carousel.Next /> -->
      </Carousel.Root>
    </div>

    <span class="mt-10 font-karla text-xl text-center max-w-[36rem] h-20">{features[current].description}</span>

    <!-- Carousel Controls -->
    <div class="mt-7 flex items-center px-5 w-[32rem] h-14 rounded-full bg-[#1515197b] border border-[#303030]">
      <!-- Previous -->
      <button onclick="{() => api!.scrollPrev()}">
        <Icon icon="majesticons:arrow-left" class="rounded-full p-1 bg-[#2b2b2f]" width="30" height="30"  />
      </button>

      <!-- Feature Title -->
      <div class="flex grow justify-center gap-3">
        <span class="font-gg font-semibold text-xl text-white">{features[current].title}</span>
        <Icon icon="mingcute:external-link-line" class="cursor-pointer" width="24" height="24" />
      </div>

      <!-- Next -->
      <button onclick="{() => api!.scrollNext()}">
        <Icon icon="majesticons:arrow-right" class="rounded-full p-1 bg-[#2b2b2f]" width="30" height="30" />
      </button>
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