<script lang="ts">
  import { slide, fade } from "svelte/transition";
  import { cubicIn, cubicInOut } from "svelte/easing";
  import NavLinks from "./NavLinks.svelte";
  let isOpen = false;

  function toggleNav() {
    isOpen = !isOpen;
  }

  export let active: string;
</script>

<button type="button" on:click={toggleNav} class="flex items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class="menu fill-colors-text-primary w-6"
  >
    {#if isOpen}
      <path
        transition:fade={{ duration: 300, easing: cubicIn }}
        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
      >
      </path>
    {:else}
      <path
        transition:fade={{ duration: 300, easing: cubicIn }}
        d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
      >
      </path>
    {/if}
  </svg>
</button>
{#if isOpen}
  <ul
    transition:slide={{ duration: 300, easing: cubicInOut }}
    class="bg-colors-background-primary absolute right-0 top-full text-right text-colors-text-primary pl-16 pr-4 py-2 border-2 border-dashed border-colors-text-primary"
  >
    <NavLinks {active} />
  </ul>
{/if}
