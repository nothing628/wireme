<script setup lang="ts">
import TabItem from './TabItem.vue'

defineProps({
    activeIndex: {
        type: Number,
        required: false,
        default: 0,
    }
})
</script>

<template>
    <div class="px-6">
        <ul class="flex text-white h-[41px]">
            <TabItem :is-active="activeIndex == 0">
                <a class="flex items-center justify-center">
                    Chats
                    <span
                        class="ml-2 text-[#246BFD] text-xs w-5 h-5 rounded-full inline-flex items-center justify-center bg-white">5</span>
                </a>
            </TabItem>
            <TabItem :is-active="activeIndex == 1"><a>Status</a></TabItem>
            <TabItem :is-active="activeIndex == 2"><a>Calls</a></TabItem>
        </ul>
    </div>
</template>