<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon">Y</div>
          <span class="logo-text">yagizhan.dev</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="nav desktop-nav" aria-label="Main navigation">
          <button @click="scrollToSection('about')" class="nav-link">About</button>
          <button @click="scrollToSection('experience')" class="nav-link">Experience</button>
          <button @click="scrollToSection('projects')" class="nav-link">Projects</button>
          
          <div class="social-links">
            <a href="https://github.com/yagizhanyakali" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yagizhanyakali" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="mobile-menu-btn"
          :class="{ 'active': isMenuOpen }"
          aria-label="Toggle mobile menu"
        >
          <div class="hamburger-icon" :class="{ 'active': isMenuOpen }">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-nav-overlay" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
      <nav class="mobile-nav" @click.stop aria-label="Mobile navigation">
        <div class="mobile-nav-content">
          <button @click="scrollToSection('about')" class="mobile-nav-link">About</button>
          <button @click="scrollToSection('experience')" class="mobile-nav-link">Experience</button>
          <button @click="scrollToSection('projects')" class="mobile-nav-link">Projects</button>
          
          <div class="mobile-social-links">
            <a href="https://github.com/yagizhanyakali" target="_blank" rel="noopener noreferrer" class="mobile-social-link" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yagizhanyakali" target="_blank" rel="noopener noreferrer" class="mobile-social-link" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--color-heading);
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: var(--color-accent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-background);
  font-weight: 700;
  font-size: 1.1rem;
}

.logo-text {
  color: var(--color-heading);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link:hover {
  color: var(--color-accent);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid var(--color-border);
}

.social-link {
  color: var(--color-text);
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  color: var(--color-accent);
  background: var(--color-background-soft);
  transform: translateY(-2px);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: relative;
}

.hamburger-icon {
  position: relative;
  width: 20px;
  height: 16px;
  margin: auto;
}

.hamburger-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
}

.hamburger-line:nth-child(1) {
  top: 0;
}

.hamburger-line:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line:nth-child(3) {
  bottom: 0;
}

/* X Animation */
.hamburger-icon.active .hamburger-line:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger-icon.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateY(-50%) scaleX(0);
}

.hamburger-icon.active .hamburger-line:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

/* Mobile Navigation Overlay */
.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-nav-overlay.active {
  opacity: 1;
  visibility: visible;
}

.mobile-nav {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100vh;
  background: var(--color-background);
  border-left: 1px solid var(--color-border);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  padding: 5rem 2rem 2rem;
}

.mobile-nav-overlay.active .mobile-nav {
  transform: translateX(0);
}

.mobile-nav-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
}

.mobile-nav-link {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem 0;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.mobile-nav-link:hover {
  color: var(--color-accent);
  padding-left: 1rem;
}

.mobile-social-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.mobile-social-link {
  color: var(--color-text);
  transition: all 0.3s ease;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  font-size: 1.1rem;
}

.mobile-social-link:hover {
  color: var(--color-accent);
  background: var(--color-background-soft);
  transform: translateX(10px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .header-content {
    padding: 0.75rem 0;
  }

  .logo {
    font-size: 1.1rem;
  }

  .logo-icon {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  /* Hide desktop navigation on mobile */
  .desktop-nav {
    display: none;
  }

  /* Show mobile menu button */
  .mobile-menu-btn {
    display: flex;
  }
}

@media (max-width: 480px) {
  .mobile-nav {
    width: 100%;
    border-left: none;
  }
  
  .logo-text {
    display: none;
  }
  
  .logo-icon {
    width: 32px;
    height: 32px;
  }
}
</style>
