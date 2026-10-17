<template>
  <footer id="contact" class="footer">
    <div class="container">
      <section class="contact">
        <h2 class="section-title">Let's build something together.</h2>
        <p class="contact-text">Reach out about a project, a collaboration, or just to say hello.</p>
        <a href="mailto:yagizhanyakali@gmail.com" class="btn btn-primary">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
          yagizhanyakali@gmail.com
        </a>
      </section>
      <div class="bottom">
        <span>© {{ new Date().getFullYear() }} Yagizhan N. Yakali</span>
        <div class="socials">
          <a href="https://github.com/yagizhanyakali" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yagizhanyakali" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: 4.5rem 0;
  border-top: 1px solid var(--color-border);
}

.contact .section-title {
  margin-bottom: 0.75rem;
}

.contact-text {
  color: var(--color-text-muted);
  max-width: 480px;
  margin-bottom: 1.5rem;
}

.bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1.75rem 0 2.5rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.socials {
  display: flex;
  gap: 1.25rem;
}

.socials a {
  color: var(--color-text-muted);
}

.socials a:hover {
  color: var(--color-heading);
}
</style>
