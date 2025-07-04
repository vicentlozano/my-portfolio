import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      { path: 'aboutme', name: 'aboutme', component: () => import('pages/AboutPage.vue') },
      { path: 'projects', name: 'projects', component: () => import('pages/ProjectsPage.vue') },
      {
        path: 'experience',
        name: 'experience',
        component: () => import('pages/ExperiencePage.vue'),
      },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'blog', name: 'blog', component: () => import('pages/BlogPage.vue') },
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
