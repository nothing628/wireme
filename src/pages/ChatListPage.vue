<script setup lang="ts">
import GradientBackground from '../components/GradientBackground.vue';
import MainToolbar from '../components/MainToolbar.vue';
import MainTabs from '../components/MainTabs.vue';
import ChatListContainer from '../components/ChatListContainer.vue'
import ChatListItem from '../components/ChatListItem.vue'
import ChatListArchivedItem from '../components/ChatListArchivedItem.vue';
import Avatar from '../assets/GradientAvatar1.png'
</script>

<template>
    <GradientBackground>
        <MainToolbar />
        <MainTabs />
    </GradientBackground>
    <ChatListContainer>
        <ChatListArchivedItem />
        <ChatListItem last-seen="20:00" last-message="whatsup,,," user-name="Via" is-show-status :avatar="Avatar" :unread-message="2"/>
        <ChatListItem last-seen="20:00" last-message="whatsup,,," user-name="Via" is-show-status is-active :avatar="Avatar"/>
        <ChatListItem last-seen="20:00" last-message="whatsup,,," user-name="Via" is-show-status :avatar="Avatar"/>
        <ChatListItem last-seen="Yesterday" last-message="bambank....!" user-name="Bambank" :avatar="Avatar"/>
    </ChatListContainer>
</template>