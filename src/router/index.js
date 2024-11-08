import { createRouter, createWebHashHistory } from 'vue-router';

import MemberView from '@/views/MemberView.vue';
import TeamView from '../views/TeamView.vue';
import NotFound from '@/views/NotFound.vue';
import { useTeamStore } from '@/stores/Team';
import HomeView from '@/views/HomeView.vue';
import ServicesView from '@/views/ServicesView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'teamview',
      component: TeamView,
    },
    {
      path: '/services',
      name: 'servicesview',
      component: ServicesView,
    },
    {
      path: '/team/:id',
      name: 'team',
      component: MemberView,
    },
    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.name === 'team') {
    const teamStore = useTeamStore();
    const memberExists = teamStore.getMember(Number(to.params.id));

    if (!memberExists) {
      next({ name: 'notFound' }); 
    } else {
      next(); 
    }
  } else {
    next(); 
  }
});

export default router;
