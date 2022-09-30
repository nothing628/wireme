<script setup lang="ts">
import GradientBackground from '../../components/GradientBackground.vue';
import MainToolbar from '../../components/MainToolbar.vue';
import MainTabs from '../../components/MainTabs.vue';
import StatusListContainer from '../../components/StatusListContainer.vue';
import StatusListItem from '../../components/StatusListItem.vue';
import StatusListDivider from '../../components/StatusListDivider.vue';
</script>

<template>
    <GradientBackground>
        <MainToolbar />
        <MainTabs :active-index="1"/>
    </GradientBackground>
    <StatusListContainer>
        <StatusListItem></StatusListItem>
        <StatusListDivider>Recent updates</StatusListDivider>
        <StatusListItem></StatusListItem>
        <StatusListItem></StatusListItem>
        <StatusListDivider>Viewed updates</StatusListDivider>
        <StatusListItem></StatusListItem>
        <StatusListItem></StatusListItem>
        <StatusListDivider>Muted updates</StatusListDivider>
        <StatusListItem></StatusListItem>
        <StatusListItem></StatusListItem>
    </StatusListContainer>
</template>