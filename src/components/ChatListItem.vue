<script setup lang="ts">
defineProps<{
    avatar: string
    isShowStatus?: boolean
    isActive?: boolean
    userName: string
    lastMessage: string
    lastSeen: string
    unreadMessage?: number
}>()
</script>

<template>
    <div class="px-6 py-3 relative flex">
        <div class="flex flex-grow items-center">
            <div class="relative w-[60px] h-[60px]">
                <img class="w-[60px] h-[60px] rounded-full" :src="avatar" />
                <div v-if="isShowStatus">
                    <div v-if="isActive"
                        class="absolute bottom-0 right-0 rounded-full bg-[#246BFD] border-[2px] border-white w-[15px] h-[15px]">
                    </div>
                    <div v-else
                        class="absolute bottom-0 right-0 rounded-full bg-[#BDBDBD] border-[2px] border-white w-[15px] h-[15px]">
                    </div>
                </div>
            </div>
            <div class="ml-5">
                <h5 class="text-[#212121] text-sm font-bold mb-1">{{userName}}</h5>
                <p class="text-[#616161] text-sm font-medium">{{lastMessage}}</p>
            </div>
        </div>
        <div class="flex flex-col items-end">
            <div :class="unreadMessage ? '' : 'opacity-0'"
                class="flex items-center justify-center w-[25px] h-[25px] rounded-full bg-gradient-to-r from-[#5089FF] to-[#246BFD] text-white text-[10px] font-semibold">
                {{unreadMessage}}</div>
            <div class="text-[#616161] text-xs font-medium mt-[8px]">{{lastSeen}}</div>
        </div>
    </div>
</template>