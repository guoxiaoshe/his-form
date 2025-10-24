export default {
  path: "/learn",
  name: "Learn",
  meta: {
    showLink: false,
    title: "学习PureAdmin",
    rank: 10
  },
  children: [
    {
      path: "/learn/pureadmin",
      name: "pureadmin",
      component: () => import("@/views/learn/PureAdmin.vue"),
      meta: {
        title: "PureAdmin示例",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
