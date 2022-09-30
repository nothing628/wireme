<template>
    <div class="px-6 pb-9 fixed bottom-0">
        <div class="flex items-center">
            <div class="flex items-center grow">
                <button class="p-[6px] w-8 h-8 shrink-0">
                    <img class="w-5 h-5" src="../assets/IconGraySmile.png" />
                </button>
                <input class="block w-full py-3 px-3 outline-none" placeholder="Type a message ..." />
            </div>
            <div class="flex items-center w-[132px] shrink-0">
                <div>
                    <button class="p-[6px]">
                        <img class="w-5 h-5" src="../assets/IconGrayPaperclip.png" />
                    </button>
                    <button class="p-[6px] mr-[12px]">
                        <img class="w-5 h-5" src="../assets/IconGrayCamera.png" />
                    </button>
                </div>
                <button class="w-14 h-14 p-4 rounded-full bg-gradient-to-r from-[#5089FF] to-[#246BFD]">
                    <img class="w-6 h-6" src="../assets/IconMic.png"/>
                </button>
            </div>
        </div>
    </div>
</template>