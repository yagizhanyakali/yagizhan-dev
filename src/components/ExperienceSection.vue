<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

interface JobExperience {
  company: string
  role: string
  period: string
  location: string
  responsibilities: string[]
}

const experiences: JobExperience[] = [
  {
    company: 'On',
    role: 'Full Stack Software Engineer',
    period: '2024 - Present',
    location: 'Berlin, Germany',
    responsibilities: [
        'Developed and maintained a robust backend system using Node.js and NestJS, ensuring high performance and scalability.',
        'Collaborated with the product team to design and implement new features, improving user experience and satisfaction.',
        'Optimized database queries and implemented caching strategies to enhance application performance.',
        'Built and maintained RESTful APIs for internal and external use, ensuring data security and compliance.',
        'Participated in code reviews and provided technical guidance to junior developers, fostering a culture of code quality and best practices.',
        'Stayed up-to-date with emerging technologies and industry trends, continuously improving technical skills and adapting to new challenges.',
        'Contributed to the development of a new design system, improving UI consistency and development speed.',
        'Mentored junior developers and conducted code reviews to maintain high code quality.'
    ]
  },
  {
    company: 'Siemens',
    role: 'Full Stack Software Engineer',
    period: '2021 - 2024',
    location: 'Istanbul, Turkey',
    responsibilities: [
      'Full Stack Developer with experience managing simultaneous pre-development projects, focusing on developing new features as per headquarters requirements and contributing innovative ideas to the backlog.',
      'Skilled in developing web-based and containerized applications for manage Siemens devices using industrial communication protocols.',
      'Proficient in backend development (NestJS with TypeScript) and frontend development (React and Angular with TypeScript), with a project split of 70% backend and 30% frontend.',
      'Developed a cross-platform application for commissioning Siemens devices using mobile devices and desktops, built from scratch using .NET MAUI with Blazor. This application provided customers with streamlined commissioning processes and simplified management of security certificates for Siemens devices on both mobile and desktop platforms.'
    ]
  },
  {
    company: 'Kontrolmatik Technologies',
    role: 'Full Stack Software Engineer',
    period: '2017 - 2021',
    location: 'Istanbul, Turkey',
    responsibilities: [
      'Full Stack Developer experienced in developing highly scalable and user-friendly industrial applications. Specialized in working on two distinct projects.',
      'Led the development of a web-based IoT project for the New Istanbul Airport, managing approximately 1000 energy meters. The application collected real-time data from these meters and provided comprehensive reporting and dashboard functionalities for end users. Contributed 70% of effort to backend development (ASP.NET Core Web API) and 30% to frontend development (Angular).',
      'Implemented LoraWAN communication protocol to connect with IoT devices, utilizing local cloud for LoraWAN gateways.',
      'Developed a web-based application utilizing microservice architecture to communicate with intelligent industrial devices through industrial communication protocols. Employed diverse technologies and languages to build microservices tailored to different device requirements. The application enabled data collection from various industrial devices, offering historical data reports, storage, and real-time monitoring.',
      'Proven ability to create robust applications that streamline data collection, reporting, and monitoring processes for industrial environments, enhancing operational efficiency and decision-making.'
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
  <section id="experience" class="section experience">
    <div class="container">
      <h2 class="animate-on-scroll">Experience</h2>
      <div ref="experienceRef" class="experience-list animate-on-scroll">
        <div 
          v-for="(job, index) in experiences" 
          :key="index" 
          class="experience-item"
        >
          <div class="job-header">
            <div class="job-info">
              <h3 class="company">{{ job.company }}</h3>
              <p class="role">{{ job.role }}</p>
              <p class="location">{{ job.location }}</p>
            </div>
            <span class="period">{{ job.period }}</span>
          </div>
          <ul class="responsibilities">
            <li v-for="(responsibility, respIndex) in job.responsibilities" :key="respIndex">
              {{ responsibility }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background: var(--color-background);
  padding: 0;
}

.experience-list {
  max-width: 800px;
}

.experience-item {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.experience-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.job-info {
  flex: 1;
}

.company {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-heading);
  margin-bottom: 0.25rem;
}

.role {
  font-size: 1rem;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.location {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 0;
  font-weight: 400;
}

.period {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
}

.responsibilities {
  list-style: none;
  padding: 0;
  margin: 0;
}

.responsibilities li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  line-height: 1.6;
}

.responsibilities li::before {
  content: '•';
  color: var(--color-accent);
  font-weight: bold;
  position: absolute;
  left: 0;
}

@media (max-width: 768px) {
  .job-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .period {
    font-size: 0.85rem;
  }
  
  .company {
    font-size: 1.1rem;
  }
  
  .role {
    font-size: 0.95rem;
  }
}
</style>
