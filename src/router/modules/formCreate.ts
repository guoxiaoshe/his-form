export default {
  path: "/formCreate",
  name: "FormCreate",
  meta: {
    icon: "ep/document",
    // showLink: false,
    title: "表单",
    rank: 9
  },
  children: [
    {
      path: "/formCreate/lesson01",
      name: "静态普通表单",
      component: () => import("@/views/fc/lesson01.vue"),
      meta: {
        title: "静态普通表单",
        showParent: true
      }
    },
    {
      path: "/formCreate/lesson02",
      name: "静态医学表单",
      component: () => import("@/views/fc/lesson02.vue"),
      meta: {
        title: "静态医学表单",
        showParent: true
      }
    },
    {
      path: "/formCreate/lesson03",
      name: "动态表单",
      component: () => import("@/views/fc/DynamicForm.vue"),
      meta: {
        title: "动态表单",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
