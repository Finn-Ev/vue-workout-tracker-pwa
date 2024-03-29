import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/plans", // show all plans to get an overview
    name: "Plans",
    component: () => import("../views/Plans.vue")
  },
  {
    path: "/plans/:selectedPlan", // show the different workouts of the chosen plan to select one of it
    name: "specificPlan",
    component: () => import("../views/PlanDetails.vue")
  },
  {
    path: "/history",
    name: "History",
    component: () => import("../views/History.vue")
  },
  {
    path: "/ongoing",
    name: "Ongoing",
    component: () => import("../views/OngoingWorkout.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 }; // scroll top top after each route change
  },
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
