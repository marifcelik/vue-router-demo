<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-full w-full max-w-[90rem]  mx-auto pt-14 text-center">
    <nav class="flex items-center justify-center">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <span> | </span>  
      <RouterLink :to="{ name: 'cars' }">Cars</RouterLink>
      <span> | </span>  
      <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped lang="postcss">
  a {
    @apply text-xl mx-4 text-indigo-700 font-bold
  }

  a.active {
    @apply text-cyan-500
  }
</style>