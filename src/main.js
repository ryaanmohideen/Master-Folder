import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import axios from 'axios';

import App from '/src/App.vue';
import Home from '/src/Home.vue';
import Login from '/src/Login.vue';
import Purchase from '/src/Purchase.vue';
import Cart from '/src/Cart.vue';
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/purchase', component: Purchase },
  { path: '/cart', component: Cart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

app.config.globalProperties.$http = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f6cc3236842fdd6ef958fa871a1857bb',
  },
});

app.mount('#app');
