<script setup lang="ts">
import BackButton from '../../components/BackButton.vue';
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="px-6 pt-6 pb-12">
        <BackButton />
        <RouterView></RouterView>
    </div>
</template>