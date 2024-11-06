<template>
    <div class="col-auto px-2">
        <a class="link-offset-2 link-underline link-underline-opacity-0" :href="icon.url">
            <i :class="`bi bi-${icon.name}`" style="font-size: 30px;"></i>
        </a>
    </div>
</template>

<script setup>

defineProps({
    icon: {
        type: Object,
        required: true
    }
})
</script>

<style>

</style>