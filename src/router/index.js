import { createWebHistory, createRouter } from "vue-router"
import ActividadesContainer from '../components/Index.vue'
import ActividadView from '../components/ActividadView.vue'


const routes = [
    {
        path: "/actividades",
        name: "Home",
        component: ActividadesContainer,
    },
    {
        path: "/actividades/:id",
        name: "Actividad",
        component: ActividadView,
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