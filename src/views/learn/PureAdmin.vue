<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";
import { localForage } from "@/utils/localforage";
const _config = ref();
const config = getCurrentInstance()?.appContext.config.globalProperties.$config;
if (config) {
  _config.value = JSON.stringify(config, null, 2);
}

const localStorageValue = ref("");
const lf = localForage();
lf.getItem<string>("pureadmin_test_key").then(value => {
  if (value) {
    localStorageValue.value = value;
  }
});
const setLocalStorage = async () => {
  await lf.setItem("pureadmin_test_key", localStorageValue.value);
  alert("已设置localStorage，请打开控制台查看");
};
</script>

<template>
  <div>
    <h3>读取配置</h3>
    <pre>{{ _config }}</pre>
    <h3>设置本地存储</h3>
    <el-input v-model="localStorageValue" />
    <el-button @click="setLocalStorage">设置</el-button>
    <h3>读取本地存储</h3>
    <pre>{{ localStorageValue }}</pre>
  </div>
</template>

<style lang="scss" scoped>
// 样式占位符
</style>
