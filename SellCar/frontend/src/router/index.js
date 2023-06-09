import { createWebHistory, createRouter } from 'vue-router';
//import { useAuthStore } from "@/store/auth";


//import Home from "@view/Home.vue";


/*function isAuth() {
    const authStore = useAuthStore();
    if (authStore.userAuth == null) {
        return { name: "Login" };
    }
    return true;
}*/
const routes = [{
        path: "/",
        name: "HomeView",
        component: () =>
            import ('@/views/HomeView.vue'),
    },
    {
        path: "/product",
        name: "Product",
        component: () =>
            import ('@/views/Product.vue')
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ('@/views/About.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/Login.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('@/views/Register.vue'),
    },
    {
        path: '/bookCar/:carid',
        name: 'bookCar',
        component: () =>
            import ('@/views/bookCar.vue'),
        props: (route) => ({ carid: route.params.carid, /*namecar: route.params.namecar*/ })

    },
    {
        path: '/admin',
        name: 'Admin',
        component: () =>
            import ('@/admin/Admin.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('@/admin/Dashboard.vue')
    },

    {
        path: '/shopcart/:email',
        name: 'ShopCart',
        component: () =>
            import ('@/views/Cart.vue'),
        props: (route) => ({ email: route.params.email })
    },
    /* {
         path: '/addcar',
         name: 'AddCar',
         component: () =>
             import ('@/views/AddCar.vue')
     },*/

];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;