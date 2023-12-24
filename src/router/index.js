import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue'
import PersonView from '../view/PersonView.vue'
import FoodView from '../view/FoodView.vue'
import PersonLastName from '../view/PersonLastName.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/food',
        name: 'food',
        component: FoodView
    },
    {
        path: '/name',
        component: PersonView,
        children: [{
            path: ':id',
            name: 'lastname',
            component: PersonLastName
        }]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router