<script lang="ts">
  import NavMobile from "./NavMobile.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<div class="flex justify-between items-center">
  <div class="branding">
    <a href="/" class="text-colors-text text-2xl">Akbar Dzikri</a>
  </div>
  <div class="flex gap-2 items-center">
    <ul class="hidden sm:flex sm:justify-evenly sm:gap-2">
      <li><a href="/">Home</a></li>
      <li><a href="/articles">Articles</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/about">About</a></li>
    </ul>
    <ThemeToggle />
    <div class="sm:hidden">
      <NavMobile />
    </div>
  </div>
</div>
