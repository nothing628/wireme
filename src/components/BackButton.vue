<script setup lang="ts">
defineProps<{
    title?: string
}>()
</script>

<template>
    <div class="py-2.5 w-full flex items-center">
        <button class="w-8 h-8 p-1">
            <img src="../assets/IconBlackArrowLeft.png" />
        </button>

        <div class="pl-4">
            <p class="text-[#212121] text-lg font-bold">{{title}}</p>
        </div>
    </div>
</template>