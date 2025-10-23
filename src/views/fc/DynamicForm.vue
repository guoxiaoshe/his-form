<template>
  <div class="bg-white rounded p-4 h-full overflow-y-auto">
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

<script setup>
import { ref } from "vue";
import formCreate from "@form-create/element-ui";
import { localForage } from "@/utils/localforage";
const lf = localForage();

const option = ref();
const rule = ref();
const fapi = ref(null);
const formData = ref({});
// 从 localForage 读取表单配置
const loadFormConfig = async () => {
  const config = await lf.getItem("test_form_config");
  console.log(config);
  if (config) {
    option.value = formCreate.parseJson(config.options);
    rule.value = formCreate.parseJson(config.rule);
  } else {
    option.value = {};
    rule.value = [];
  }
};
loadFormConfig();

const onSubmit = formData => {
  //todo 提交表单
  console.log("提交表单", formData);
};
</script>
