<script setup lang="ts">
import ButtonPrimary from '../../../components/ButtonPrimary.vue';
import OutlineButton from '../../../components/OutlineButton.vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const goToLoginWithPhone = () => {
    router.push({ name: 'login.phone' })
}
</script>

<template>
    <div class="flex flex-col min-h-[calc(100vh-126px)]">
        <div class="flex-none mb-8 pt-8">
            <div class="w-full max-w-[300px] mx-auto">
                <img class="w-full h-auto" src="../../../assets/Frame1.png" />
            </div>
        </div>

        <div class="flex-1">
            <h1 class="text-[#212121] text-4xl text-center font-bold mb-8">Let's you in</h1>
            <div>
                <OutlineButton class="mb-4">
                    <img src="../../../assets/Facebook.png" class="w-6 mr-3" />
                    Continue with Facebook
                </OutlineButton>
                <OutlineButton class="mb-6">
                    <img src="../../../assets/Google.png" class="w-6 mr-3" />
                    Continue with Google
                </OutlineButton>
                <div class="h-8 mb-6 relative">
                    <div
                        class="text-center before:-z-[1] before:absolute before:top-[13px] before:block before:w-full before:h-[1px] before:content-[' '] before:bg-[#EEEEEE]">
                        <span class="inline-block w-10 bg-white">or</span>
                    </div>
                </div>
                <ButtonPrimary @click="goToLoginWithPhone">Sign in with Phone Number</ButtonPrimary>
            </div>
        </div>

        <div class="flex-none py-2">
            <p class="text-[#9E9E9E] text-sm text-center font-normal">Don't have an account? <a
                    class="text-[#246BFD] font-medium">Sign up</a></p>
        </div>
    </div>
</template>