<template>
    <div class="d-flex justify-content-center">
        <div class="row justify-content-center w-75" data-index="1" style="max-width: 600px; min-width: 400px;">
            <RouterLink :to="{name: 'team', params: {id: member.id}}" class="link-offset-2 link-underline link-underline-opacity-0">
                <div id="link" class="d-flex text-center rounded-pill mt-4 text-light align-items-center position-relative"
                    style="height: 80px;">
                    <img :src="member.img" class="position-absolute p-2 h-100 w-auto img-fluid rounded-circle"/>
                    <div class="w-50 mx-auto text-center">
                        <p style="font-size:15px" class=" mb-0 text-wrap">{{ member.name }} | {{ member.role }}</p>

                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>


<script setup>

defineProps({
    member: {
        type: Object,
        required: true
    }
})
</script>

<style>

</style>