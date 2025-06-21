import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'aboutme', component: () => import('pages/AboutPage.vue') },
      { path: 'projects', component: () => import('pages/ProjectsPage.vue') },
      { path: 'skills', component: () => import('pages/SkillsPage.vue') },
      { path: 'experience', component: () => import('pages/ExperiencePage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: 'blog', component: () => import('pages/BlogPage.vue') },
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
