<script lang="ts" setup>
import GradientBackground from '../components/GradientBackground.vue';
import MessageToolbar from '../components/MessageToolbar.vue';
import MessageTypeInput from '../components/MessageTypeInput.vue';
</script>

<template>
    <GradientBackground>
        <MessageToolbar />
    </GradientBackground>
    <div class="relative min-h-[calc(100vh-115px)]">
        <MessageTypeInput />
    </div>
</template>