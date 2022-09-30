<script setup lang="ts">
defineProps<{
    username: string,
    lastUpdated?: string,
    withAdd?: boolean
    isReaded?: boolean
    isMuted?: boolean
}>()

const emit = defineEmits<{
    (event: 'click'): void
}>()
</script>
<template>
    <button @click="emit('click')" class="flex items-center mb-6 text-left w-full">
        <div class="relative">
            <img class="h-[60px] w-[60px] rounded-full" :class="!isReaded ? 'border-[2.5px] border-[#246BFD]' : ''"
                src="../assets/GradientAvatar1.png" />
            <img v-if="withAdd" class="w-[15px] h-[15px] absolute bottom-0 right-0" src="../assets/IconBluePlus.png" />
        </div>
        <div class="flex flex-col pl-5">
            <p class="text-base font-bold mb-1" :class="isMuted ? 'text-[#757575]' : 'text-[#212121]'">{{username}}</p>
            <span class="text-sm" :class="isMuted ? 'text-[#9E9E9E]' : 'text-[#616161]'">{{lastUpdated}}</span>
        </div>
    </button>
</template>