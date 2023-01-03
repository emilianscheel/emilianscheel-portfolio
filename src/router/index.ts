import { createRouter, createWebHistory } from 'vue-router'
import HelloView from '../views/HelloView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Start',
      component: HelloView
    },
    {
      path: '/projekte',
      name: 'Projekte',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/expertise',
      name: 'Expertise',
      component: () => import('../views/ExpertiseView.vue')
    },
    {
      path: '/erfahrung',
      name: 'Erfahrung',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/kontakt',
      name: 'Kontakt',
      component: () => import('../views/ContactView.vue')
    },
    // Impressum und Datenschutz
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../static/LegalView.vue')
    }, 
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('../static/PrivacyPolicyView.vue')
    }
  ]
})

export default router
