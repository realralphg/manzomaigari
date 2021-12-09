const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/contact", component: () => import("pages/Contactt.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
      { path: "/fellowship", component: () => import("pages/Fellowship.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
