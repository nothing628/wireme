<script setup lang="ts">
import GradientBackground from '../components/GradientBackground.vue';
import MainToolbar from '../components/MainToolbar.vue';
import MainTabs from '../components/MainTabs.vue';

</script>

<template>
    <GradientBackground>
        <MainToolbar />
        <MainTabs />
    </GradientBackground>
    <div class="text-red-500">
        Chat List page
    </div>
</template>