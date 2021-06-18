import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from "@/views/Blog"
import Contact from "@/views/Contact"
import Projects from "@/views/Projects"
import About from '../views/About'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/project',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
