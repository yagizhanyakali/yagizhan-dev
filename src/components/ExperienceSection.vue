<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

interface Role {
  title: string
  period: string
  responsibilities: string[]
}

interface JobExperience {
  company: string
  location: string
  roles: Role[]
}

const experiences: JobExperience[] = [
  {
    company: 'On',
    location: 'Berlin, Germany',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Mar 2026 - Present',
        responsibilities: [
          'Elevated to Senior Engineer within 19 months, taking on broader ownership of architecture decisions and cross-functional technical direction.',
          'Actively integrate AI tooling into daily engineering workflows, configuring and orchestrating AI subagents to automate and accelerate development tasks.'
        ]
      },
      {
        title: 'Software Engineer',
        period: 'Aug 2024 - Mar 2026',
        responsibilities: [
          'Built a bulk order creation flow enabling users to upload large orders via Excel in a single action, significantly reducing manual entry time for wholesale customers.',
          'Refactored the checkout flow end-to-end, adding structured observability and integrating Adyen webhooks to make payment processing fully reactive and easier to debug.',
          'Optimized a high-traffic historical orders endpoint by 65% through DB index restructuring and query optimization, directly improving load times for large wholesale accounts.',
          'Implemented a shipment notification system via email, keeping thousands of B2B customers informed on order status each month.',
          "Integrated Document Hub API and a GraphQL product data API, expanding the platform's data capabilities across the stack.",
          'Improved system-wide logging and observability using New Relic, increasing visibility into production issues across the team.',
          'Supported team growth through active code reviews and pair programming sessions.'
        ]
      }
    ]
  },
  {
    company: 'Siemens',
    location: 'Istanbul, Turkey',
    roles: [
      {
        title: 'Full Stack Software Engineer',
        period: '2021 - 2024',
        responsibilities: [
          'Full Stack Developer with experience managing simultaneous pre-development projects, focusing on developing new features as per headquarters requirements and contributing innovative ideas to the backlog.',
          'Skilled in developing web-based and containerized applications for manage Siemens devices using industrial communication protocols.',
          'Proficient in backend development (NestJS with TypeScript) and frontend development (React and Angular with TypeScript), with a project split of 70% backend and 30% frontend.',
          'Developed a cross-platform application for commissioning Siemens devices using mobile devices and desktops, built from scratch using .NET MAUI with Blazor. This application provided customers with streamlined commissioning processes and simplified management of security certificates for Siemens devices on both mobile and desktop platforms.'
        ]
      }
    ]
  },
  {
    company: 'Kontrolmatik Technologies',
    location: 'Istanbul, Turkey',
    roles: [
      {
        title: 'Full Stack Software Engineer',
        period: '2017 - 2021',
        responsibilities: [
          'Full Stack Developer experienced in developing highly scalable and user-friendly industrial applications. Specialized in working on two distinct projects.',
          'Led the development of a web-based IoT project for the New Istanbul Airport, managing approximately 1000 energy meters. The application collected real-time data from these meters and provided comprehensive reporting and dashboard functionalities for end users. Contributed 70% of effort to backend development (ASP.NET Core Web API) and 30% to frontend development (Angular).',
          'Implemented LoraWAN communication protocol to connect with IoT devices, utilizing local cloud for LoraWAN gateways.',
          'Developed a web-based application utilizing microservice architecture to communicate with intelligent industrial devices through industrial communication protocols. Employed diverse technologies and languages to build microservices tailored to different device requirements. The application enabled data collection from various industrial devices, offering historical data reports, storage, and real-time monitoring.',
          'Proven ability to create robust applications that streamline data collection, reporting, and monitoring processes for industrial environments, enhancing operational efficiency and decision-making.'
        ]
      }
    ]
  }
]

const experienceRef = ref<HTMLElement>()
const { observeElement } = useIntersectionObserver()

onMounted(() => {
  if (experienceRef.value) {
    observeElement(experienceRef.value)
  }
})
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div ref="experienceRef" class="experience animate-on-scroll">
        <h2 class="label">Experience</h2>
        <div class="list">
          <article v-for="job in experiences" :key="job.company" class="item">
            <div class="job-header">
              <h3 class="company">{{ job.company }}</h3>
              <span class="location">{{ job.location }}</span>
            </div>
            <div v-for="role in job.roles" :key="role.title" class="role-block">
              <div class="role-header">
                <p class="role">{{ role.title }}</p>
                <span class="period">{{ role.period }}</span>
              </div>
              <ul class="responsibilities">
                <li v-for="(item, i) in role.responsibilities" :key="i">{{ item }}</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
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

.list {
  flex: 1 1 360px;
  min-width: 0;
}

.item {
  padding: 2rem 0;
  border-bottom: 1px solid var(--color-border);
}

.item:first-child {
  padding-top: 0;
}

.item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.job-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 1rem;
  margin-bottom: 1rem;
  align-items: baseline;
}

.company {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.location {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

.role-block + .role-block {
  margin-top: 1.5rem;
}

.role-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.25rem 1rem;
  margin-bottom: 0.75rem;
}

.role {
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-heading);
}

.period {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.responsibilities {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.65;
}

.responsibilities li {
  position: relative;
  padding-left: 1.25rem;
}

.responsibilities li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.65em;
  width: 6px;
  height: 1px;
  background: var(--color-text-muted);
}
</style>
