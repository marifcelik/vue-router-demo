<script setup>
import { useRoute } from 'vue-router'
import carsData from '../assets/data.json'

const { params: { id } } = useRoute();
const car = carsData.find(value => value.id == id)
</script>

<template>
  <div class="pt-5">
    <h1 class="text-2xl my-5">car page</h1>
    <h2 class="text-xl text-sky-500">{{ car.make + ' ' + car.body }}</h2>
    <ul class="p-2">
      <li class="m-2">year: {{ car.year }}</li>
      <li>price: ${{ car.price.toLocaleString('en-US') }}</li>
    </ul>
  </div>
</template>
