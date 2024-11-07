<template>
  <header>
    <div class="wrapper">
      <nav class="navbar fixed-top navbar-expand-lg">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" :to="{ name: 'home' }"> haseef hub</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our team
                </a>
                <ul class="dropdown-menu">
                  <li v-for="member in team" :key="member.id">
                    <RouterLink active-class="active" :to="{ name: 'team', params: { id: member.id } }" class="dropdown-item"> {{ member.name }} </RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto"> 
              <li class="nav-item">
                <a aria-current="page" href="https://www.linkedin.com/company/haseef-solutions">
                  <i style="font-size:25px;" class="nav-link bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div class="wrapper z-0">
    <transition-group appear @before-enter="beforeEnter" @enter="enter">
      <img key="1" data-position="-" src="/images/svg1.png" style="max-width: 900px; min-width:400px" class="w-75 img position-fixed top-0 end-0 z-0" alt="">
      <img key="2" data-position="+" src="/images/svg2.png" style="max-width: 900px; min-width:400px" class="w-75 img position-fixed bottom-0 start-0" alt="">
    </transition-group>
  </div>
  <div class="wrapper z-3">
    <RouterView v-slot="{ Component }">
      <transition>
        <component :is="Component"></component>
      </transition>
    </RouterView>

    <transition appear @before-enter="footerBeforeEnter" @enter="footerEnter">
      <div class="row z-3 m-auto text-center position-absolute bottom-0 w-100 text-light">
        <p class="mb-4">&#169; Made By Mohammad Abdelhafeed</p>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import gsap from 'gsap';
import { useTeamStore } from './stores/Team';
import { animate } from './composables/animate';

const { globalEnter, globalBeforeEnter , backgroundBeforeEnter, backgroundEnter } = animate();

const beforeEnter = (el) => {
  backgroundBeforeEnter(el);
};

const enter = (el) => {
  backgroundEnter(el);
};

const footerBeforeEnter = (el) => {
  gsap.set(el, {
    y: 150
  });
};

const footerEnter = (el) => {
  gsap.to(el, {
    y: 0,
    bottom: 0,
    duration: 1,
  });
};

const { team } = useTeamStore();
</script>

<style>
.img {
  pointer-events: none;
}
</style>
