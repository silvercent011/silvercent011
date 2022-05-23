<script lang="ts" setup>

const props = defineProps(['user'])
const user = props.user


</script>
<template>

    <div class="bg-white rounded-lg flex m-5">
        <div>
            <img class="w-64 h-64 rounded-full m-10" :src="user.avatar_url" alt="">
        </div>
        <div class="m-10 box-border flex-1">
            <h1 class="text-4xl font-bold">{{ user.name }}</h1>
            <p>{{ user.login }}</p>
            <br>
            <p class="break-words">{{ user.bio }}</p>
            <b>⚠️EM CONSTRUÇÃO⚠️</b>
        </div>

    </div>
</template>