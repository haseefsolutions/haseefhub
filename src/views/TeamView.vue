<script setup>
import TeamList from '@/components/TeamList.vue';
import { animate } from '@/composables/animate';
import gsap from 'gsap';

const {globalBeforeEnter, globalEnter} = animate()
    
const beforeEnter = (el) => {
    globalBeforeEnter(el, el.dataset.index);
}

const enter = (el) => {
    globalEnter(el, el.dataset.index);

}
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
          <div>
            <img src="/images/logo.png" width="100px" class="mt-5 img-fluid " alt="Profile Picture" />
        <h4 class="mt-3 fw-bold text-light">Haseef solutions</h4>
        <p class="text-light mb-0">our team</p>
  </div>
  
  </transition>
  </div>
  </div>
    <TeamList />
  </main>
</template>
