<script setup lang="ts">
import ButtonPrimary from '../../../components/ButtonPrimary.vue';
import CheckboxButton from '../../../components/CheckboxButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToOtpVerificationPage = () => {
    router.push({ name: 'login.verify' })
}
const goToRegisterPage = () => {
    router.replace({ name: 'register' })
}
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-126px)]">
        <div class="flex-1">
            <div class="w-[140px] max-w-[300px] mx-auto">
                <img class="w-full h-auto" src="../../../assets/AppBlueLogo.png" />
            </div>
        </div>
        <div class="flex-1">
            <h1 class="text-[#212121] text-center text-2xl font-bold">Login to Your Account</h1>
        </div>
        <div class="flex-1">
            <div class="flex flex-col items-center">
                <input type="text"
                    class="w-full bg-[#FAFAFA] outline-0 p-5 h-[60px] text-base text-[#212121] rounded-2xl mb-8 border border-transparent focus:bg-[#246BFD]/10 focus:border-[#246BFD]"
                    placeholder="+62 000 0000 0000" />
                <CheckboxButton>Remember me</CheckboxButton>

                <ButtonPrimary @click="goToOtpVerificationPage">Sign in</ButtonPrimary>
            </div>
        </div>
        <div class="flex-none py-2">
            <p class="text-[#9E9E9E] text-sm text-center font-normal">Don't have an account? <a
                    @click="goToRegisterPage" class="text-[#246BFD] font-medium">Sign up</a></p>
        </div>
    </div>
</template>