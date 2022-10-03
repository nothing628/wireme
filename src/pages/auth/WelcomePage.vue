<script setup lang="ts">
import PillProgress from '../../components/PillProgress.vue';
import ButtonPrimary from '../../components/ButtonPrimary.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginPage = () => {
    router.push({ name: 'login' })
}
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex-1 pt-20">
            <div class="w-full max-w-[420px] mx-auto">
                <img class="w-full h-auto" src="../../assets/GettingStarted1.png" />
            </div>
        </div>
        <div class="flex-none px-6 py-12">
            <div class="flex flex-col items-center">
                <div class="mb-12">
                    <h1 class="text-center text-[#246BFD] text-3xl font-bold mb-6">Welcome to Wireme</h1>
                    <p class="text-center text-[#212121] text-lg font-medium">The best messenger and chat app of the
                        century to make your day great!</p>
                </div>
                <div class="text-center mb-12">
                    <PillProgress :total="3" :current="1" />
                </div>
                <div class="w-full">
                    <ButtonPrimary @click="goToLoginPage">Get Started</ButtonPrimary>
                </div>
            </div>
        </div>
    </div>
</template>