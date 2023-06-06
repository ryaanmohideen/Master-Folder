import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from '/src/App.vue';
import Home from '/src/Home.vue';
import Login from '/src/Login.vue';
import Purchase from '/src/Purchase.vue';
import Cart from '/src/Cart.vue';

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/purchase', component: Purchase },
    { path: '/cart', component: Cart },
  ],
});

app.use(router);

app.mount('#app');


export default router
