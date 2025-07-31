<script setup lang="ts">
import { ref } from 'vue'
import Child from '@/components/Child.vue'

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
])
</script>

<template>
  <div><h1>Item List</h1></div>
  <Child :items="items"
    ><template #item="{ item }">
      <strong class="">{{ item.name }}</strong>
    </template></Child
  >
</template>
