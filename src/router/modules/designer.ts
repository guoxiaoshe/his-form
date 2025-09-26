export default {
  path: "/designer",
  name: "Designer",
  meta: {
    icon: "✏️",
    // showLink: false,
    title: "设计表单",
    rank: 8
  },
  children: [
    {
      path: "/designer/github",
      name: "github",
      component: () => import("@/views/designer/Designer.vue"),
      meta: {
        title: "github示例",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
