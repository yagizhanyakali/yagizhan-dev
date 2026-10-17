<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

interface Project {
  title: string
  description: string
  link: string
  linkText: string
}

const projects: Project[] = [
  {
    title: 'SiemensIX Blazor',
    description: 'The port of siemens-ix library to Blazor',
    link: 'https://github.com/siemens/ix-blazor',
    linkText: 'View Source'
  },
  {
    title: 'BeMinimal',
    description: 'A web site for list minimal products',
    link: 'https://github.com/yagizhanNY/beminimal',
    linkText: 'View Source'
  },
  {
    title: 'ChatGPT UI Clone',
    description: 'A web application that mimics the ChatGPT UI',
    link: 'https://github.com/yagizhanNY/openai-chatgpt3-clone',
    linkText: 'View Source'
  }
]

const projectsRef = ref<HTMLElement>()
const { observeElement } = useIntersectionObserver()

onMounted(() => {
  if (projectsRef.value) {
    observeElement(projectsRef.value)
  }
})
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Selected projects</h2>
      <div ref="projectsRef" class="projects-grid animate-on-scroll">
        <a
          v-for="project in projects"
          :key="project.title"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <div class="card-top">
            <h3 class="project-title">{{ project.title }}</h3>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7" /><path d="M8 7h9v9" /></svg>
          </div>
          <p class="project-description">{{ project.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-card {
  flex: 1 1 300px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: 12px;
  background: var(--color-card);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  color: var(--color-heading);
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}

.project-card:hover {
  background: #fafafa;
  border-color: #d4d4d8;
  color: var(--color-heading);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--color-text-muted);
}

.project-title {
  font-size: 1.125rem;
  letter-spacing: -0.02em;
}

.project-description {
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--color-text-muted);
}
</style>
