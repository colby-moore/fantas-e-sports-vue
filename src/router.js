import Vue from "vue"
import Router from "vue-router"
import Landing from "./components/vues/landing.vue"
import Login from "./components/vues/login.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "landing",
            component: Landing
        },
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
})