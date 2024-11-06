<script setup>
import MemberList from '@/components/MemberList.vue';
import router from '@/router';
import { useTeamStore } from '@/stores/Team';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

import gsap from 'gsap';
import { animate } from '@/composables/animate';
import { computed, onMounted } from 'vue';


const teamStore = useTeamStore();

const route = useRoute();

const {globalBeforeEnter, globalEnter} = animate()
    
const beforeEnter = (el) => {
    globalBeforeEnter(el, el.dataset.index);
}

const enter = (el) => {
    globalEnter(el, el.dataset.index);

}

  const member = computed(() => teamStore.getMember(Number(route.params.id)) ); 




</script>
<template>
   <main>
    <div class="z-3">
      <div class="container text-center mt-5">
          <transition
  appear
  @before-enter="beforeEnter"
  @enter="enter"
          >
          <div :key="member.id">
            <img :src="member.img" width="100px" class="mt-5 rounded-circle img-fluid " alt="Profile Picture" />
        <h4 class="mt-3 fw-bold text-light">{{ member.name}}</h4>
        <p class="text-light mb-0"> {{ member.role }}</p>
  </div>
  
  </transition>
  </div>
  </div>
    <MemberList :member="member" :key="member.id" />
  </main>
</template>
