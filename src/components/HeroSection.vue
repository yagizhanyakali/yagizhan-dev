<script setup lang="ts">
import profileImage from '@/assets/yagi.jpeg'
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="profile-picture fade-in-up stagger-1">
          <img 
            :src="profileImage" 
            alt="John Doe"
            class="profile-img"
          />
        </div>
        <h1 class="hero-name fade-in-up stagger-2">Yagizhan N. Yakali</h1>
        <p class="hero-title fade-in-up stagger-3">Software Engineer</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 0 0 4rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.profile-picture {
  margin-bottom: 2rem;
}

.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-background-soft);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.05);
}

.hero-name {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
  background: linear-gradient(
    45deg,
    #00D4FF,
    #FF6B6B,
    #4ECDC4,
    #45B7D1,
    #96CEB4,
    #FFEAA7,
    #DDA0DD,
    #00D4FF
  );
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 4s ease-in-out infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.hero-title {
  font-size: 1.5rem;
  color: var(--color-text-muted);
  font-weight: 400;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 0 3rem;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
  }
  
  .hero-name {
    font-size: 2.5rem;
  }
  
  .hero-title {
    font-size: 1.25rem;
  }
}
</style>
