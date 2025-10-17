<template>
  <div class="h-[calc(100vh-160px)]">
    <fc-designer ref="designer" :config="config" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const designer = ref();
const config = ref({
  showSaveBtn: true,
  // 可选组件设置
  hiddenMenu: ["subform"],
  hiddenItem: [
    "password",
    "switch",
    "colorPicker",
    "elTransfer",
    "tree",
    "fcEditor",
    "elButton",
    "html",
    "fcTable",
    "elTabs",
    "elCollapse"
  ],
  // 组件配置设置
  switchType: false,
  // 表单配置设置
  hiddenFormConfig: [
    "event",
    "labelSuffix",
    "labelWidth",
    "hideRequiredAsterisk",
    "showMessage",
    "inlineMessage"
  ]
});
</script>
