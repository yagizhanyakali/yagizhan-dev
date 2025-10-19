<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ExperienceSection from '../components/ExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
