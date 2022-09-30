<script setup lang="ts">
import GradientBackground from '../../components/GradientBackground.vue';
import MainToolbar from '../../components/MainToolbar.vue';
import MainTabs from '../../components/MainTabs.vue';
</script>

<template>
    <GradientBackground>
        <MainToolbar />
        <MainTabs :active-index="1"/>
    </GradientBackground>
</template>