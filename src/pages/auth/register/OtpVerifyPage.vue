<script setup lang="ts">
import ButtonPrimary from '../../../components/ButtonPrimary.vue';
import OtpInput from '../../../components/OtpInput.vue';
import useInterval from '../../../composable/useInterval'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const counter = ref(60)
const countDown = () => {
    counter.value -= 1
}

const { resetInterval } = useInterval(1000, countDown)

watch(counter, (newval) => {
    if (newval <= 0) {
        resetInterval()
    }
})

const router = useRouter()
const goToFillProfilePage = () => {
    router.replace({
        name: 'register.profile'
    })
}
</script>
    
<template>
    <div class="flex flex-col min-h-[calc(100vh-126px)]">
        <div class="flex items-center flex-1">
            <div>
                <p class="text-[#212121] text-sm text-center font-medium mb-[60px]">Code has been send to +62 111
                    ********56</p>
                <OtpInput />
                <p class="text-[#212121] text-sm text-center font-medium">Resend code in <span
                        class="text-[#246BFD]">{{counter}}</span> s</p>
            </div>
        </div>
        <div class="flex-none">
            <ButtonPrimary @click="goToFillProfilePage">Verify</ButtonPrimary>
        </div>
    </div>
</template>