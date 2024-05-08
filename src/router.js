import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // 路由重定向
        {
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/home', component: () => {
                return import("./components/chapter04/Home.vue");
            }
        },


        {
            path: '/about', component: () => {
                return import("./components/chapter04/About.vue");
            },
            children: [
                {
                    path: 'tab1', component: () => {
                        return import('./components/chapter04/pages/Tab1.vue');
                    }
                },
                {
                    path: 'tab2', component: () => {
                        return import('./components/chapter04/pages/Tab2.vue');
                    }
                }

            ]
        },
        {
            path: '/movie', component: () => {
                return import('./components/chapter04/Movie.vue');
            },
            children: [
                {
                    path: ':id', name: 'MovieDetails', component: () => {
                        return import('./components/chapter04/MovieDetails.vue');
                    },
                    props: true
                }
            ]
        },

        {
            path: '/login',
            name: 'Login',
            component: () => import('./components/chapter04/Login.vue')
        },

    ]
})


router.beforeEach((to, from, next) => {
    let isLogin = false
    if (to.name == 'MovieDetails') {
        if (isLogin) {
            next()
        } else {
            next({ name: 'Login' })
        }
    } else { next() }
})

export default router;