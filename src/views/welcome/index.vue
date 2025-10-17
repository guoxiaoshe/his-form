<script setup lang="ts">
/* defineOptions is a Vue SFC compiler macro — no runtime import required */
/* Provide a TypeScript declaration so the compiler recognizes the macro */
declare const defineOptions: (options: { name?: string }) => void;

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4"
  >
    <div class="max-w-2xl w-full text-center">
      <!-- 主标题区域 -->
      <div class="mb-12">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6 shadow-lg"
        >
          <svg
            class="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 class="text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          灵犀云医学量表系统
        </h1>

        <div class="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />

        <h2 class="text-4xl font-semibold text-blue-600 mb-8">慧测</h2>

        <p class="text-2xl text-gray-600 font-medium mb-12">欢迎使用</p>
      </div>
    </div>
  </div>
</template>
