<template>
  <div class="max-w-120 px-8 py-6 mx-auto">
    <h2 class="font-size-5 mb-3">试题列表</h2>
    <div class="flex flex-col gap-4">
      <div v-for="item in 10" :key="item" class="h-15 min-w-30 px-5 py-4 bg-gray-100 border-rd-1.5 cursor-pointer" transition="background-color-250" hover="bg-gray-200">测试一</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Resources, User } from '@/types'

// async function getUser() {
//   console.log('getUser')
//   const response = await http.get<Resources<User>>('/user', { userId: '1' }, { _mock: 'user', _autoLoading: true })
//   console.log('response')
//   console.log(response)
// }
</script>
