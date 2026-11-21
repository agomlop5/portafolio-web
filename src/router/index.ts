import Home from '@/pages/home/Home.vue'
import AboutView from '@/views/AboutView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ContactView from '@/views/ContactView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'
import WorkIndexView from '@/views/WorkIndexView.vue'
import WorkLayout from '@/views/WorkLayout.vue'
import { categorias } from '@/data/categories'
import { proyectos } from '@/data/projects'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/proyectos',
      component: WorkLayout,
      children: [
        {
          path: '',
          name: 'Proyectos',
          component: WorkIndexView,
        },
        {
          path: ':categoria',
          name: 'Categoria',
          component: CategoryView,
          props: true,
          beforeEnter: (to) => {
            const existe = categorias.some((c) => c.slug === to.params.categoria)
            if (!existe) {
              return {
                name: '404',
                params: { pathMatch: to.path.substring(1).split('/') },
                query: to.query,
                hash: to.hash,
              }
            }
          },
        },
        {
          path: ':categoria/:slug',
          name: 'Proyecto',
          component: ProjectView,
          props: true,
          beforeEnter: (to) => {
            const existe = proyectos.some(
              (p) => p.slug === to.params.slug && p.categoria === to.params.categoria,
            )
            if (!existe) {
              return {
                name: '404',
                params: { pathMatch: to.path.substring(1).split('/') },
                query: to.query,
                hash: to.hash,
              }
            }
          },
        },
      ],
    },
    {
      path: '/sobre-mi',
      name: 'Sobre mí',
      component: AboutView,
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
    },
  ],

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  },
})