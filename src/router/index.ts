import Home from "@/pages/home/Home.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
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
    
  ]
})