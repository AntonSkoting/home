import { createRouter, createWebHistory } from 'vue-router'
import CatchAllView from '../views/CatchAllView'
import AboutView from '../views/AboutView'
import SkillsView from '../views/SkillsView'
import EducationView from '../views/EducationView'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView
  },
  {
    path: '/about', 
    redirect: '/'
  }, 
  {
    path: '/:catchall(.*)', 
    name: 'catchall', 
    component: CatchAllView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
