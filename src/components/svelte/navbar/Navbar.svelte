<script lang="ts">
  import NavMobile from "./NavMobile.svelte";
</script>

<div class="flex justify-between items-center">
  <div class="branding">
    <a href="/" class="text-colors-text text-2xl">Akbar Dzikri</a>
  </div>
  <ul class="hidden sm:flex sm:justify-evenly sm:gap-2">
    <li><a href="/">Home</a></li>
    <li><a href="/articles">Articles</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/about">About</a></li>
  </ul>
  <div class="relative sm:hidden">
    <NavMobile />
  </div>
</div>
