<script setup>
import MemberIcon from '@/components/MemberIcon.vue';
import TeamList from '@/components/TeamList.vue';
import Service from '@/components/Service.vue';
import { animate } from '@/composables/animate';
import gsap from 'gsap';
import { useServicesStore } from '@/stores/Services';

const {globalBeforeEnter, globalEnter} = animate()
    
const beforeEnter = (el) => {
    globalBeforeEnter(el, el.dataset.index);
}

const enter = (el) => {
    globalEnter(el, el.dataset.index);

}

const {services} = useServicesStore();

</script>

<template>
  <main>
        <transition-group
  appear
  @before-enter="beforeEnter"
  @enter="enter"
          >
    <div key="1"  data-index="1" class="z-3">
      <div class="container text-center mt-5">
          
          <div>
            <img src="/images/logo.png" width="100px" class="mt-5 img-fluid " alt="Profile Picture" />
        <h4 class="mt-3 fw-bold text-light">Haseef solutions</h4>
        <p class="text-light mb-0">our services</p>
  </div>

  
  </div>
  </div>

  <div class="container mt-2 " style="max-width:700px;padding-bottom:70px;" >
  <div class="row  m-auto " style="width: 90%;">
    <transition-group
    key="2"
    data-index="2"
  appear
  @before-enter="beforeEnter"
  @enter="enter"
          >
   <Service v-for="(service, index) in services" :key="service.id" :data-index="index+2" :service="service"/>
  </transition-group>
</div>

  </div>
    
</transition-group>
    
  </main>
</template>
