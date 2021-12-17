import { createRouter, createWebHashHistory } from "vue-router";
import About from "../views/About.vue";
import EventList from "../views/EventList.vue";
import EventDetails from "../../services/EventDetails.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: true,
    component: EventDetails,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
