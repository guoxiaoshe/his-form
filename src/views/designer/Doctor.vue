<template>
  <div class="h-[calc(100vh-160px)]">
    <fc-designer ref="designer" :config="config" @save="handleSave" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { localForage } from "@/utils/localforage";
import { message, closeAllMessage } from "@/utils/message";

const lf = localForage();

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
  configFormOrder: ["base", "validate"],
  hiddenItemConfig: {
    default: ["field", "formCreateCol>span", "control"]
  },
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

const getFormConfigFromLF = async (): Promise<FormConfig | null> => {
  const config = await lf.getItem<FormConfig>("test_form_config");
  return config;
};

const init = async () => {
  const formConfig = await getFormConfigFromLF();
  const { options, rule } = formConfig;
  if (formConfig && designer.value) {
    designer.value.setRule(rule);
    designer.value.setOptions(options);
  }
};
init();
const handleSave = async (formConfig: FormConfig) => {
  console.log("表单配置：", formConfig);
  await lf.setItem("test_form_config", formConfig);
  message("表单配置已保存", { type: "success" });
};
</script>
