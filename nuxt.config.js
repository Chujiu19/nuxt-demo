export default {
  router: {
    linkExactActiveClass: "text-primary",
    linkActiveClass: "active",
    extendRoutes(routes, resolve) {
      routes.splice(0);
      routes.push({
        path: "/",
        component: resolve(__dirname, "layouts/Default"),
        children: [
          {
            path: "/",
            name: "Home",
            component: resolve(__dirname, "pages/Home/Index.vue"),
            default: true,
          },
          {
            path: "/edit",
            name: "Edit",
            component: resolve(__dirname, "pages/Edit/Index.vue"),
          },
          {
            path: "/settings",
            name: "Settings",
            component: resolve(__dirname, "pages/Settings/Index.vue"),
          },
          {
            path: "/login",
            name: "Login",
            component: resolve(__dirname, "pages/Login/Index.vue"),
          },
          {
            path: "/register",
            name: "Register",
            component: resolve(__dirname, "pages/Login/Index.vue"),
          },
          {
            path: "/article/:slug",
            name: "Article",
            props: true,
            component: resolve(__dirname, "pages/Article/Index.vue"),
          },
          {
            name: "Profile",
            path: "/profile",
            props: true,
            component: resolve(__dirname, "pages/Profile/Index.vue"),
          },
        ],
      });
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3389
  },
  plugins: ["~/plugins/request.js", "~/plugins/dayjs.js"],
};
