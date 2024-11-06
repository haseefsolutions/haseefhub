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
        <p class="text-light mb-0">the hub</p>
  </div>

  
  </div>
  </div>

   <div key="2"  data-index="2" class="d-flex justify-content-center">
        <div class="row justify-content-center w-75" data-index="1" style="max-width: 600px; min-width: 400px;">
            <RouterLink :to="{name: 'teamview'}" class="link-offset-2 link-underline link-underline-opacity-0">
                <div id="link" class="d-flex text-center rounded-pill mt-4 text-light align-items-center position-relative"
                    style="height: 80px;">
                    <div class="w-50 mx-auto text-center">
                        <p style="font-size:15px" class=" mb-0 text-wrap">our team</p>

                    </div>
                </div>
            </RouterLink>
        </div>
    </div>    


    <div key="3"  data-index="3" class="d-flex justify-content-center">
        <div class="row justify-content-center w-75" data-index="1" style="max-width: 600px; min-width: 400px;">
              <a href="https://www.linkedin.com/company/haseef-solutions" class="link-offset-2 link-underline link-underline-opacity-0">
              <div  id="link" class="d-flex text-center rounded-pill mt-4 text-light align-items-center position-relative"
                    style="height: 80px;">
                    <img src="/images/linkedin.png" class=" position-absolute p-2 h-100 w-auto img-fluid rounded-circle"/>
                    <div class="w-50 mx-auto text-center">
                        <p style="font-size:15px" class=" mb-0 text-wrap"> our linkedIn</p>

                    </div>
                </div>
            </a> 
    </div>

    
    </div>
</transition-group>
    
  </main>
</template>
