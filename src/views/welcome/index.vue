<script setup lang="ts">
/* defineOptions is a Vue SFC compiler macro — no runtime import required */
/* Provide a TypeScript declaration so the compiler recognizes the macro */
declare const defineOptions: (options: { name?: string }) => void;

defineOptions({
  name: "Welcome"
});

import { useRouter } from "vue-router";
const router = useRouter();

const navigate = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div
    class="h-full from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12"
  >
    <div class="max-w-4xl w-full space-y-10">
      <!-- Hero -->
      <div
        class="bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-8 sm:p-12 text-center"
      >
        <div class="flex flex-col items-center">
          <div
            class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full mb-6 shadow-xl"
            aria-hidden="true"
          >
            <svg
              class="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1
            class="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2 tracking-tight"
          >
            灵犀云医学量表系统
          </h1>

          <div class="w-28 h-1 bg-blue-500 mx-auto my-4 rounded-full" />

          <h2 class="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-2">
            慧测
          </h2>
          <p class="text-lg sm:text-xl text-gray-600">
            欢迎使用 — 快速访问示例与工具
          </p>
        </div>
      </div>

      <!-- Quick links -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Dynamic Form Card -->
        <div
          class="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          role="button"
          tabindex="0"
          aria-label="打开动态表单示例"
          @click="navigate('/formCreate/lesson03')"
          @keyup.enter="navigate('/formCreate/lesson03')"
        >
          <div class="flex items-start space-x-4">
            <div
              class="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 text-white flex items-center justify-center shadow-md"
            >
              <svg
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M9 12h6M9 16h6M9 8h6M3 6h18M3 18h18"
                />
              </svg>
            </div>

            <div class="flex-1">
              <h3
                class="text-lg font-semibold text-gray-800 group-hover:text-teal-600"
              >
                去填写
              </h3>
              <p class="mt-2 text-sm text-gray-500">患者角色填写和提交表单</p>
            </div>
          </div>
        </div>

        <!-- Doctor Example Card -->
        <div
          class="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-200 cursor-pointer"
          role="button"
          tabindex="0"
          aria-label="打开 doctor 示例"
          @click="navigate('/designer/doctor')"
          @keyup.enter="navigate('/designer/doctor')"
        >
          <div class="flex items-start space-x-4">
            <div
              class="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md"
            >
              <svg
                class="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                  d="M12 3v4M7 6h10M6 10h12v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8z"
                />
              </svg>
            </div>

            <div class="flex-1">
              <h3
                class="text-lg font-semibold text-gray-800 group-hover:text-indigo-600"
              >
                去设计
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                医生端/问诊场景，通过表单设计器设计表单。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
