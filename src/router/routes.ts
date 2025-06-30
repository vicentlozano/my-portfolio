import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',  name:'Home' ,  component: () => import('pages/HomePage.vue') },
      { path: 'aboutme',name:'About Me' ,  component: () => import('pages/AboutPage.vue') },
      { path: 'projects',name:'Projects' ,  component: () => import('pages/ProjectsPage.vue') },
      { path: 'experience',name:'Experience' ,  component: () => import('pages/ExperiencePage.vue') },
      { path: 'contact',name:'Contact' ,  component: () => import('pages/ContactPage.vue') },
      { path: 'blog',name:'Blog' ,  component: () => import('pages/BlogPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
