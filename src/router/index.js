import { createWebHistory, createRouter } from "vue-router"
import ActividadesContainer from '../components/Index.vue'


const routes = [
    {
        path: "/actividades",
        name: "Home",
        component: ActividadesContainer,
    },
    {
        path: '/:catchAll(.*)',
        redirect: { name: 'Home' }
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;