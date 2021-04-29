import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import("../views/Game")
//const Game = () => import("../views/Game")

const routes = [
    {
        paths: "/bbtan",
        name: "Home",
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    base: "bbtan",
    routes
})

export default router