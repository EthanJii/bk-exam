import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test'
import Home from '@/views/home'
Vue.use(Router);
let router = new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {title: 'test', path: '/test', name: 'test', component: Test},
        {title: 'home', path: '/home', name: 'home', component: Home},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.length === 0) {
        from.name ? next({name: from.name}) : next('/');
    } else {
        next();
    }
});
export default router
