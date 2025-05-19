<script lang="ts">

const menuButtons = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Docs", href: "https://docs.soldierbot.app" }
]

</script>

<nav class="flex items-center justify-between h-20 w-full pl-24 pr-10 py-5 bg-gradient-to-r from-[#21497a95] via-[#1d6e8095] to-[#2b4a9795] nav-shadow">
  <a href="/" aria-label="Logo button">
    <div class="flex items-center gap-8">
      <div class="w-[37px] h-[44px] bg-cover bg-no-repeat" style="background-image: url('/logo/Soldier@76x90.png');"></div>
      <span class="text-title text-foreground tracking-wider font-bungee">SOLDIER</span>
    </div>
  </a>

  <div class="flex items-center gap-12 flex-row-reverse">
    <button class="px-3 py-2 text-foreground text-lg font-poppins rounded-lg bg-[#1e6997] font-medium drop-shadow-xl">Dashboard</button>

    <div class="flex items-center">
      {#each menuButtons as button, i}
        <a href={button.href} class="font-karla font-medium text-xl px-3 {i != 0 ? 'border-l' : ''}">
          {button.name}
        </a>
      {/each}
    </div>
  </div>
</nav>

<style>
  .nav-shadow {
    box-shadow: 0px 15px 49px 15px rgba(79, 71, 170, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(10px);
  }
</style>