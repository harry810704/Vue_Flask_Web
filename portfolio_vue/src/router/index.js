import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import('../views/Resume.vue'),
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/work_ai',
    name: 'Work_ai',
    component: () => import('../views/Work_ai.vue'),
  },
  {
    path: '/work_node',
    name: 'Work_node',
    component: () => import(window.open('http://ec2-13-229-53-206.ap-southeast-1.compute.amazonaws.com/')),
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
