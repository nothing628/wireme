<script setup lang="ts">
defineProps<{
    isActive?: Boolean
}>()
</script>

<template>
    <li class="font-semibold flex-grow text-center" :class="isActive ? 'border-b-4 border-b-white' : ''">
        <slot></slot>
    </li>
</template>