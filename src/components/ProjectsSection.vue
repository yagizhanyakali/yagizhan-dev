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
  <section id="projects" class="section projects">
    <div class="container">
      <h2 class="animate-on-scroll">Projects</h2>
      <div ref="projectsRef" class="projects-grid animate-on-scroll">
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          class="project-card"
        >
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <a :href="project.link" class="project-link">
            {{ project.linkText }} →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: var(--color-background);
  padding: 0;
  margin-bottom: 5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
}

.project-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.1);
}

.project-card:hover::before {
  opacity: 1;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 1rem;
}

.project-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-link {
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-top: auto;
}

.project-link:hover {
  color: var(--color-heading);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
}
</style>
