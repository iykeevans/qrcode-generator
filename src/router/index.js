import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views";

const routes = [
  {
    path: "",
    name: "QRCodeGenerator",
    component: Home,
  },
  {
    path: "/qrcodes",
    name: "QRCodes",
    // lazy load page
    component: () => import("../views/qrcodes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
