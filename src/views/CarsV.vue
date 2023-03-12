<script setup>
import { RouterView } from 'vue-router'
import Car from '../components/Car.vue';
import carsData from '../assets/data.json';
</script>

<template>
  <div class="w-full pt-10">
    <h1 class="text-4xl">Cars Page</h1>
    <div class="grid grid-cols-5 w-full mt-9 gap-5">
      <Car v-for="car in carsData" :key="car.id" v-bind="car" />
    </div>
  </div>
  <RouterView />
</template>