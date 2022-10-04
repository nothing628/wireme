<script setup lang="ts">
import Loading from '../components/Loading.vue'
import useTimeout from '../composable/useTimeout'
import { useRouter } from 'vue-router'

const router = useRouter()

useTimeout(2000, () => {
    router.replace({
        name: 'getting-started'
    })
})
</script>

<template>
    <div class="relative h-screen">
        <div class="w-[365px] mx-auto absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <img class="w-full h-auto" src="../assets/SplashBackground.png" />
        </div>

        <div class="fixed left-0 right-0 bottom-[100px]">
            <div class="w-[3.75rem] mx-auto">
                <Loading />
            </div>
        </div>
    </div>
</template>