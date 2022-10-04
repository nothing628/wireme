<template>
    <div class="w-[3.75rem] h-[3.75rem]">
        <img src="../assets/Loading.png" class="w-[3.75rem] h-[3.75rem] loading-animation" />
    </div>
</template>

<style>
@keyframes loading-rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.loading-animation {
    animation-name: loading-rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}
</style>