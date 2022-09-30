<template>
    <div class="p-6">
        <slot></slot>

        <div class="fixed right-6 bottom-6 flex flex-col">
            <button
                class="bg-gradient-to-r from-[#5089FF] to-[#246BFD] w-14 h-14 rounded-full p-4 mb-5">
                <img class="" src="../assets/IconPencil.png" />
            </button>
            <button
                class="bg-gradient-to-r from-[#5089FF] to-[#246BFD] w-14 h-14 rounded-full p-4">
                <img class="" src="../assets/IconCamera.png" />
            </button>
        </div>
    </div>
</template>