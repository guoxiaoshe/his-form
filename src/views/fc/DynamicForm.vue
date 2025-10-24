<template>
  <div class="bg-white rounded p-4 h-full overflow-y-auto">
    <el-button @click="loadFormData">载入上次结果</el-button>
    <form-create
      v-model="formData"
      v-model:api="fapi"
      :rule="rule"
      :option="option"
      @submit="onSubmit"
    />
    <div class="mt-4">
      <h4>表单填写数据</h4>
      <pre>{{ formData }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import formCreate from "@form-create/element-ui";
import { localForage } from "@/utils/localforage";
import { message } from "@/utils/message";
const lf = localForage();

const option = ref();
const rule = ref();
const fapi = ref(null);
const formData = ref({});
// 从 localForage 读取表单配置
const loadFormConfig = async () => {
  const config = await lf.getItem<FormConfig>("test_form_config");
  console.log(
    "options:",
    JSON.parse(config.options),
    "rule:",
    JSON.parse(config.rule)
  );
  if (config) {
    option.value = formCreate.parseJson(config.options);
    rule.value = formCreate.parseJson(config.rule);
  } else {
    option.value = {};
    rule.value = [];
  }
};
loadFormConfig();

// 从localForage获取表单填写结果
const loadFormData = async () => {
  const data = await lf.getItem("dynamic_form_data");
  if (data) {
    formData.value = data;
  }
};

const onSubmit = async data => {
  // 把结果保存到 localForage
  await lf.setItem("dynamic_form_data", data);
  message("表单数据已保存到本地存储", { type: "success" });
};
</script>
