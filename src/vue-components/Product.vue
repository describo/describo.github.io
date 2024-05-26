<template>
    <div class="flex flex-row space-x-2 p-5 bg-slate-200 rounded-lg flex-grow">
        <div class="flex flex-col space-y-10 place-content-between">
            <div class="flex flex-col space-y-2">
                <div><slot name="title"></slot></div>
                <div class="text-3xl"><slot name="price"></slot></div>
                <div class="text-xs">This price may change at any time.</div>
                <ul class="list-disc">
                    <slot name="content"></slot>
                </ul>
            </div>
        </div>
        <div>
            <slot name="controls"></slot>
        </div>
    </div>
</template>

<script setup></script>
