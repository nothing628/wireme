<script setup lang="ts">
defineProps<{
    total: number
    current: number
}>()
</script>

<template>
    <div class="block">
        <a v-for="i in total" :key="i" href="#" class="inline-block h-2 mr-1.5 rounded-[8px]" :class="i == current ? 'w-8 bg-[#5089FF]' : 'w-2 bg-[#E0E0E0]'"></a>
    </div>
</template>