<script lang="ts" setup>
const userData = await fetch('https://api.github.com/users/silvercent011').then(res => res.json())
</script>


<template>
    <div class="bg-gray-800 justify-center items-center min-h-screen w-full flex flex-col">
        <UserCard :user="userData" />
    </div>
</template>