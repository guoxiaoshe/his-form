<script setup>
import formCreate from "@form-create/element-ui";
import { onMounted, ref } from "vue";

const formData = ref({});
const formApi = ref();
const formOptions = {
  language: {
    "zh-cn": {
      Az87OmQS: "商品名称",
      BAVvUidu: "商品价格",
      CkD1fG2H: "商品描述",
      DgH2iJ3K: "库存数量",
      EhI3jK4L: "发货方式",
      FiJ4kL5M: "配送时间",
      GjK5lM6N: "用户评价",
      HkL6mN7O: "添加到购物车",
      IkM7nO8P: "立即购买",
      JlN8oP9Q: "优惠活动",
      KmO9pQ0R: "搜索商品",
      LnP0qR1S: "分类",
      MoQ1rS2T: "品牌",
      NpR2sT3U: "付款方式",
      OqS3tU4V: "订单确认",
      PrT4uV5W: "用户注册",
      QsU5vW6X: "用户登录",
      RtV6wX7Y: "联系客服",
      SuW7xY8Z: "退出登录",
      TvX8yZ9A: "个人信息",
      UwY9zA0B: "购物车",
      VxZ0aB1C: "结算",
      WyA1bC2D: "运费",
      XzB2cD3E: "订单状态",
      YaC3dE4F: "支付成功",
      ZbD4eF5G: "支付失败"
    },
    en: {
      Az87OmQS: "Goods name",
      BAVvUidu: "Goods price",
      CkD1fG2H: "Product description",
      DgH2iJ3K: "Stock quantity",
      EhI3jK4L: "Shipping method",
      FiJ4kL5M: "Delivery time",
      GjK5lM6N: "User reviews",
      HkL6mN7O: "Add to cart",
      IkM7nO8P: "Buy now",
      JlN8oP9Q: "Promotions",
      KmO9pQ0R: "Search products",
      LnP0qR1S: "Category",
      MoQ1rS2T: "Brand",
      NpR2sT3U: "Payment method",
      OqS3tU4V: "Order confirmation",
      PrT4uV5W: "User registration",
      QsU5vW6X: "User login",
      RtV6wX7Y: "Contact customer service",
      SuW7xY8Z: "Logout",
      TvX8yZ9A: "Personal information",
      UwY9zA0B: "Shopping cart",
      VxZ0aB1C: "Checkout",
      WyA1bC2D: "Shipping fee",
      XzB2cD3E: "Order status",
      YaC3dE4F: "Payment successful",
      ZbD4eF5G: "Payment failed"
    }
  },
  form: {
    inline: false,
    hideRequiredAsterisk: false,
    labelPosition: "right",
    size: "default",
    labelWidth: "125px"
  },
  resetBtn: {
    show: false,
    innerText: "重置"
  },
  submitBtn: {
    show: true,
    innerText: "提交"
  }
};
const rules = ref([
  {
    type: "select",
    field: "F9j0mfxuzftiabc",
    title: "选择器",
    info: "",
    effect: {
      fetch: ""
    },
    $required: false,
    options: [
      {
        label: "选项01",
        value: "1"
      },
      {
        label: "选项02",
        value: "2"
      },
      {
        label: "选项03",
        value: "3"
      }
    ],
    _fc_id: "id_Fg94mfxuzftiacc",
    name: "ref_Fcoumfxuzftiadc",
    display: true,
    hidden: false,
    _fc_drag_tag: "select"
  },
  {
    type: "upload",
    field: "Fevomfxuzjlwatc",
    title: "上传",
    info: "",
    $required: false,
    props: {
      action: "/",
      onSuccess:
        "$FNX:const res = $inject.args[0];\nconst file = $inject.args[1];\n\nfile.url = res.data.url;"
    },
    _fc_id: "id_Fzp7mfxuzjlwauc",
    name: "ref_Fne3mfxuzjlwavc",
    display: true,
    hidden: false,
    _fc_drag_tag: "upload"
  },
  {
    type: "switch",
    field: "F2cymfxuzh20aec",
    title: "开关",
    info: "",
    $required: false,
    props: {
      activeValue: true,
      inactiveValue: false
    },
    _fc_id: "id_F43emfxuzh20afc",
    name: "ref_F80nmfxuzh20agc",
    display: true,
    hidden: false,
    _fc_drag_tag: "switch"
  },
  {
    type: "timePicker",
    field: "Fvstmfxuzhjrahc",
    title: "时间区间",
    info: "",
    $required: false,
    props: {
      isRange: true
    },
    _fc_id: "id_F6kumfxuzhjraic",
    name: "ref_Fkwtmfxuzhjrajc",
    display: true,
    hidden: false,
    _fc_drag_tag: "timeRange"
  },
  {
    type: "rate",
    field: "Fafxmfxuzi6rakc",
    title: "评分",
    info: "",
    $required: false,
    _fc_id: "id_Fopfmfxuzi6ralc",
    name: "ref_Ft03mfxuzi6ramc",
    display: true,
    hidden: false,
    _fc_drag_tag: "rate",
    value: 0
  },
  {
    type: "elTransfer",
    field: "F6ejmfxuzk18awc",
    title: "穿梭框",
    info: "",
    $required: false,
    props: {
      _optionType: 1
    },
    _fc_id: "id_F359mfxuzk18axc",
    name: "ref_Fajzmfxuzk18ayc",
    display: true,
    hidden: false,
    _fc_drag_tag: "elTransfer"
  },
  {
    type: "datePicker",
    field: "Fhc0mfxuziqkanc",
    title: "日期区间",
    info: "",
    $required: false,
    props: {
      type: "datetimerange"
    },
    _fc_id: "id_Fmptmfxuziqkaoc",
    name: "ref_F6homfxuziqkapc",
    display: true,
    hidden: false,
    _fc_drag_tag: "dateRange"
  },
  {
    type: "datePicker",
    field: "Fog7mfxuzj6kaqc",
    title: "日期",
    info: "",
    $required: false,
    _fc_id: "id_Fl9xmfxuzj6karc",
    name: "ref_Fficmfxuzj6kasc",
    display: true,
    hidden: false,
    _fc_drag_tag: "datePicker"
  }
]);

onMounted(() => {
  formApi.value?.onSubmit(formData => {
    console.log("submit", formData);
  });
});
</script>
<template>
  <div class="base-container flex justify-center">
    <formCreate
      v-model="formData"
      v-model:api="formApi"
      class="w-[768px]"
      :option="formOptions"
      :rule="rules"
    />
  </div>
</template>
<style lang="scss" scoped></style>
