import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import Service from '../views/Service.vue';
import Contact from '../views/Contact.vue';
import NotFoundRouter from '../views/NotFoundRouter.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/service', component: Service },
  { path: '/:pathMatch(.*)*', component: NotFoundRouter },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
