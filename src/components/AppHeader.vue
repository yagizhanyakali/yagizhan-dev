<script setup lang="ts">
const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]
</script>

<template>
  <header class="header">
    <div class="container header-inner">
      <a href="#top" class="brand">yagizhan.dev</a>
      <nav class="nav" aria-label="Main">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1.25rem;
  min-height: 64px;
}

.brand {
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: -0.01em;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.25rem;
  font-size: 0.875rem;
}

.nav a {
  color: var(--color-text-muted);
}

.nav a:hover {
  color: var(--color-heading);
}
</style>
