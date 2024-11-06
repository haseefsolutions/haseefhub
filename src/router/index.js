import { createRouter, createWebHashHistory } from 'vue-router'; // Switch to hash mode
import HomeView from '../views/TeamView.vue';
import MemberView from '@/views/MemberView.vue';
import TeamView from '../views/TeamView.vue';
import NotFound from '@/views/NotFound.vue';
import { useTeamStore } from '@/stores/Team';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), // Switch to hash history
  routes: [
    {
      path: '/',
      name: 'home',
      component: TeamView,
    },
    {
      path: '/team/:id',
      name: 'team',
      component: MemberView,
      beforeEnter: (to, from, next) => {
        const teamStore = useTeamStore();
        const memberExists = teamStore.getMember(Number(to.params.id));

        if (memberExists) {
          next();
        } else {
          next({ name: 'notFound' });
        }
      },
    },
    {
      path: '/:notFound(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

export default router;
