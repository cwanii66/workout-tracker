
import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../supabase/init';
import Home from '../views/Home.vue';
const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const Create = () => import('../views/Create.vue');
const ViewWorkout = () => import('../views/ViewWorkout.vue');
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      auth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login',
      auth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'register',
      auth: false
    }
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      title: 'Create',
      auth: true
    }
  },
  {
    path: '/view-workout/:workoutId',
    name: 'View-Workout',
    component: ViewWorkout,
    meta: {
      title: 'View Workout',
      auth: false
    }
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Change document titles
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Active Tracker`;
  next();
});

// Route guard for auth routes
router.beforeEach((to, from, next) => {
  const user= supabase.auth.user();
  if (to.matched.some((res) => res.meta.auth)) {
    if (user) {
      next();
      return;
    }
    next({ name: 'Login'} );
    return;
  }
  next();
});

export default router;
