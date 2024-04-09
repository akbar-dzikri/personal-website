<script lang="ts">
  import NavMobile from "./NavMobile.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
  import NavLinks from "./NavLinks.svelte";

  export let active: string;
</script>

<div class="flex justify-between items-center">
  <div class="branding">
    <a href="/" class="text-colors-text-primary text-2xl">Akbar Dzikri</a>
  </div>
  <div class="flex gap-2 items-center text-colors-text-primary sm:gap-4">
    <ul class="hidden sm:flex sm:justify-evenly sm:gap-2">
      <NavLinks {active} />
    </ul>
    <ThemeToggle />
    <div class="sm:hidden">
      <NavMobile {active} />
    </div>
  </div>
</div>
