<script setup lang="ts">
import profileImage from '@/assets/yagi.jpeg'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero-content">
      <img :src="profileImage" alt="Yagizhan N. Yakali" class="avatar" />
      <h1 class="name">Yagizhan N. Yakali</h1>
      <p class="title">
        Software Engineer based in Berlin. I build robust backend systems and simple, fast
        applications.
      </p>
      <div class="actions">
        <a href="#projects" class="btn btn-primary">View projects</a>
        <a href="#contact" class="btn">Get in touch</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 5rem 0 4.5rem;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--color-border);
}

.name {
  font-size: clamp(2.25rem, 8vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
  font-weight: 700;
}

.title {
  font-size: 1.25rem;
  line-height: 1.5;
  color: var(--color-text-muted);
  max-width: 560px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.5rem;
}
</style>
