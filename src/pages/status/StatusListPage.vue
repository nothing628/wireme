<script setup lang="ts">
import GradientBackground from '../../components/GradientBackground.vue';
import MainToolbar from '../../components/MainToolbar.vue';
import MainTabs from '../../components/MainTabs.vue';
import StatusListContainer from '../../components/StatusListContainer.vue';
import StatusListItem from '../../components/StatusListItem.vue';
import StatusListDivider from '../../components/StatusListDivider.vue';
import MyStatusListItem from '../../components/MyStatusListItem.vue';
</script>

<template>
    <GradientBackground>
        <MainToolbar />
        <MainTabs :active-index="1"/>
    </GradientBackground>
    <StatusListContainer>
        <MyStatusListItem />
        <StatusListDivider>Recent updates</StatusListDivider>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago"></StatusListItem>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago"></StatusListItem>
        <StatusListDivider>Viewed updates</StatusListDivider>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago" is-readed></StatusListItem>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago" is-readed></StatusListItem>
        <StatusListDivider>Muted updates</StatusListDivider>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago" is-readed is-muted></StatusListItem>
        <StatusListItem username="Marielle Wigington" last-updated="10 minutes ago" is-readed is-muted></StatusListItem>
    </StatusListContainer>
</template>