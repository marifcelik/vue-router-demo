<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  id: Number,
  make: String,
  body: String,
  price: Number,
  year: Number
})

function yonlendir() {
  router.push({ name: 'carDetails', params: { id: props.id.toString() } })
}

</script>

<template>
  <div @click="yonlendir" class="h-36 p-4 rounded-xl border border-slate-600 cursor-pointer hover:bg-slate-400/5 transition-colors">
    <h2>{{ make }}</h2>
    <h3>{{ body }}</h3>
    <h3>$ {{ price.toLocaleString('en-US') }}</h3>
  </div>
</template>

