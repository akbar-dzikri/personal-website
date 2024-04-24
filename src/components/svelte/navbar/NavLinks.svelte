<script lang="ts">
  export let active: string;

  interface Link {
    url: string;
    text: string;
  }

  const links: Link[] = [
    { url: "/", text: "Home" },
    { url: "/posts", text: "Posts" },
    { url: "/projects", text: "Projects" },
    { url: "/contact", text: "Contact" },
  ];
</script>

{#each links as link}
  <li>
    <a
      href={link.url}
      class="decoration-solid {link.text === active
        ? ''
        : 'opacity-50 hover:opacity-100'}"
    >
      {link.text}
    </a>
  </li>
{/each}
