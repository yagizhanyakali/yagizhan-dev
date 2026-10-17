<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const aboutRef = ref<HTMLElement>()
const { observeElement } = useIntersectionObserver()

const stack = ['Node.js', 'NestJS', 'TypeScript', 'MongoDB']

onMounted(() => {
  if (aboutRef.value) {
    observeElement(aboutRef.value)
  }
})
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div ref="aboutRef" class="about animate-on-scroll">
        <h2 class="label">About</h2>
        <div class="body">
          <p>
            I'm a passionate software engineer based in Berlin, specializing in building robust
            backend systems and user-friendly applications. With expertise in Node.js, NestJS,
            TypeScript, and MongoDB, I thrive on creating scalable solutions that bridge the gap
            between complex technical requirements and seamless user experiences. I'm always eager
            to tackle new challenges and expand my skills across the full development stack.
          </p>
          <ul class="tags">
            <li v-for="item in stack" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem 3rem;
}

.label {
  flex: 0 0 140px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0;
  color: var(--color-text-muted);
}

.body {
  flex: 1 1 360px;
  min-width: 0;
}

.body p {
  line-height: 1.7;
  margin-bottom: 1.25rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.tags li {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 0.25rem 0.625rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text);
}
</style>
