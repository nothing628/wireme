<script lang="ts" setup>
import GradientBackground from '../components/GradientBackground.vue';
import MessageToolbar from '../components/MessageToolbar.vue';
import MessageTypeInput from '../components/MessageTypeInput.vue';
import MessageItem from '../components/MessageItem.vue';
import MessageDate from '../components/MessageDate.vue';
</script>

<template>
    <GradientBackground>
        <MessageToolbar />
    </GradientBackground>
    <div class="relative min-h-[calc(100vh-115px)]">
        <div class="p-6">
            <MessageDate>Today</MessageDate>
            <MessageItem message="Commodo commodo eiusmod quis anim." />
            <MessageItem message="Consequat ullamco pariatur occaecat eu laborum." as-sender />
            <MessageItem message="In quis dolore culpa esse dolore officia eiusmod fugiat id ad commodo quis voluptate sunt." is-readed/>
            <MessageItem message="Ipsum labore qui aliquip aute dolor ad occaecat nisi mollit veniam deserunt velit esse." is-readed as-sender />
        </div>
        <MessageTypeInput />
    </div>
</template>