<script setup lang="ts">
defineProps<{
    asSender?: boolean
    isReaded?: boolean
    message: string
}>()
</script>

<template>
    <div class="mb-5">
        <div class="py-4 px-6 rounded-[20px] relative" :class="asSender ? 'bg-[#246BFD] text-white ml-10 rounded-br-md' : 'bg-[#E5E5E5] text-[#212121] mr-10 rounded-bl-md'">
            <p>{{message}}</p>
            <div class="inline absolute bottom-4 right-6">
                <span class="font-medium text-xs">09:41</span>
                <span class="inline ml-1" v-if="isReaded && asSender">
                    <img class="inline-block w-4 h-4" src="../assets/IconCheck.png" />
                </span>
            </div>
        </div>
    </div>
</template>