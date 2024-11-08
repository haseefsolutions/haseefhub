<template>
    <div class=" justify-content-around  col d-flex m-auto g-0 w-auto p-2" >
<div
        style="width: 180px;height:180px;"
    class="  rounded-circle  p-5 text-center position-relative "
    id="link"

>
    <p class="  position-absolute top-50 start-50 translate-middle opacity-25" style="font-size:100px">{{ service.id }}</p>

    <p class=" position-absolute top-50 start-50 translate-middle">
        {{ service.name }}
    </p>
</div>

</div>
</template>

<script setup>
defineProps({
service: {
    type: Object,
    required: true,
},
});
</script>

<style>



</style>
