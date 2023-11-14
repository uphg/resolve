<template>
  <div class="max-w-270 px-8 py-6 mx-auto">
    <!-- <h2>问题页</h2> -->
    <div class="py-6">
      <n-progress type="line" :percentage="percentage" :indicator-placement="'inside'" />
    </div>
    <div class="min-h-125 max-w-240 mx-auto px-6 py-4">
      <h2 class="min-h-30">JavasSript 中 for 的性能比 forEach 的性能要好，为何还要使用 forEach？</h2>
      <div>
        <n-input class="h-85 w-100% font-size-4" placeholder="Please enter Markdown format" type="textarea" size="large" autosize/>
      </div>
    </div>
    <div class="max-w-240 mx-auto px-6 flex justify-between">
      <n-button type="primary" size="large">上一题</n-button>
      <n-button type="primary" size="large">下一题</n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const percentage = ref(20)
const answer = ref('')
</script>