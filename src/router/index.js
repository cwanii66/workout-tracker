
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Change document titles

// Route guard for auth routes

export default router;
