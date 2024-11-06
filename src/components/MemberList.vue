<template>
<div class="col justify-content-center m-auto " style="max-width: 1200px;">
    <transitio-group>
       
    
    <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
            >
           
            <MemberWidget v-for="(link , index) in member.links" :key="index" :link="link" :data-index="index + 1" />
            <div key="social" class="row justify-content-center m-auto mt-3 flex-row" style="width: 200px;" :data-index="member.links.length + 0.5" >
                <MemberIcon v-for="icon in member.icons" :key="icon.name" :icon="icon"  />
            </div>
           
    </transition-group>


     
</transitio-group>



</div>

</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap'
import TeamWidget from './TeamWidget.vue';
import { useTeamStore } from '@/stores/Team';
import MemberWidget from './MemberWidget.vue';
import MemberIcon from './MemberIcon.vue';
import { animate } from '@/composables/animate';



defineProps({
member:{
    type: Object,
    required: true
}
})

const {globalBeforeEnter, globalEnter} = animate()
    
const beforeEnter = (el) => {
    globalBeforeEnter(el, el.dataset.index);
}

const enter = (el) => {
    globalEnter(el, el.dataset.index);

}
</script>

<style>

</style>