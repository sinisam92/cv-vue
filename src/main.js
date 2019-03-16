import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/resume",
    component: Resume,
    name: "resume"
  },
  {
    path: "/projects",
    component: Projects,
    name: "projects"
  },
  {
    path: "/contact",
    component: Contact,
    name: "contact"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
