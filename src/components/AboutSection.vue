<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const aboutRef = ref<HTMLElement>()
const { observeElement } = useIntersectionObserver()

onMounted(() => {
  if (aboutRef.value) {
    observeElement(aboutRef.value)
  }
})
</script>

<template>
  <section id="about" class="section about">
    <div class="container">
      <h2 class="animate-on-scroll">About</h2>
      <div ref="aboutRef" class="about-content animate-on-scroll">
        <p>
          I'm a passionate software engineer based in Berlin, specializing in building robust backend systems and user-friendly applications. With expertise in Node.js, NestJS, TypeScript, and MongoDB, I thrive on creating scalable solutions that bridge the gap between complex technical requirements and seamless user experiences. I'm always eager to tackle new challenges and expand my skills across the full development stack.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: var(--color-background);
}

.about-content {
  max-width: 800px;
}

.about-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text);
}
</style>
