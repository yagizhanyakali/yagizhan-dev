import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver() {
  const observedElements = ref<Set<HTMLElement>>(new Set())
  const observer = ref<IntersectionObserver | null>(null)

  const observeElement = (element: HTMLElement) => {
    if (observer.value) {
      observer.value.observe(element)
      observedElements.value.add(element)
    }
  }

  const unobserveElement = (element: HTMLElement) => {
    if (observer.value) {
      observer.value.unobserve(element)
      observedElements.value.delete(element)
    }
  }

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
  })

  onUnmounted(() => {
    if (observer.value) {
      for (const element of observedElements.value) {
        observer.value?.unobserve(element)
      }
      observer.value.disconnect()
    }
  })

  return {
    observeElement,
    unobserveElement
  }
}
