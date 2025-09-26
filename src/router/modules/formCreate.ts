export default {
  path: "/formCreate",
  name: "FormCreate",
  meta: {
    icon: "ri/information-line",
    // showLink: false,
    title: "全部表单",
    rank: 9
  },
  children: [
    {
      path: "/formCreate/lesson01",
      name: "lesson01",
      component: () => import("@/views/fc/lesson01.vue"),
      meta: {
        title: "lesson01",
        showParent: true
      }
    },
    {
      path: "/formCreate/lesson02",
      name: "示例表单",
      component: () => import("@/views/fc/lesson02.vue"),
      meta: {
        title: "示例表单",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
