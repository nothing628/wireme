<script setup lang="ts">
import BackButton from '../../components/BackButton.vue';
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();
const title = computed(() => {
    if (route.name == 'login.verify') {
        return "OTP Code Verification"
    }
    return ""
})
</script>

<template>
    <div class="px-6 pt-6 pb-12">
        <BackButton :title="title" />
        <RouterView></RouterView>
    </div>
</template>