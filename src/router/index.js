import { createRouter, createWebHistory } from 'vue-router'
import PaginaNotas from '../views/PaginaNotas'
import Pagina404 from '../views/Pagina404';

const routes = [
  {
    path: '/notas',
    name: 'Notas',
    component: PaginaNotas
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "estadisticas" */ '../views/PaginaEstadisticas.vue')
  },
  {
    path: '/',
    redirect: '/notas'
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Not Found',
    component: Pagina404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
