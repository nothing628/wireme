<template>
    <label class="flex items-center mb-8">
        <input type="checkbox"
            class="checkbox" />
        <span></span>
        <span class="ml-2 font-semibold text-[#212121] text-sm">
            <slot></slot>
        </span>
    </label>
</template>

<style>
.checkbox {
    display: none;
}

.checkbox+span {
    width: 24px;
    height: 24px;
    border-radius: 8px;
    display: block;
    background-color: white;
    border: 3px solid #246BFD;
}

.checkbox:checked+span {
    background-color: #246BFD;
    background-image: url('../assets/Check.png');
    background-size: 12px;
    background-repeat: no-repeat;
    background-position: center center;
}
</style>