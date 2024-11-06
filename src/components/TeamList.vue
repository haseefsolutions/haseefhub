<template>
<div class="col justify-content-center m-auto " style="max-width: 1200px;">
    <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
            >
            <TeamWidget v-for="(member , index) in team" :key="member.id" :member="member" :data-index="index + 1" />
    </transition-group>

</div>

</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap'
import TeamWidget from './TeamWidget.vue';
import { useTeamStore } from '@/stores/Team';
import { animate } from '@/composables/animate';

const {team} = useTeamStore();

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