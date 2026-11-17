import Home from "@/pages/home/Home.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import WorkIndexView from "@/views/WorkIndexView.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    },
    {
      path: '/trabajo',
      name: 'Trabajo',
      component: WorkIndexView
    },
    {
      path: '/sobre-mi',
      name: 'Sobre mí',
      component: AboutView
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: ContactView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    },

    ],
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash }
      return { top: 0 }
    },
    
})