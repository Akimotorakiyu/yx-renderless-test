import { nextTick, onUnmounted, Ref } from "vue";
import {
  createRouter,
  createWebHistory,
  onBeforeRouteLeave,
  RouteRecordRaw,
} from "vue-router";
import About from "./About.vue";
import Home from "./Home.vue";

const routes = <RouteRecordRaw[]>[
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const afterEachCallBackSet = new Set<() => void>();

router.afterEach((to) => {
  afterEachCallBackSet.forEach((fn) => fn());
});

export function onAfterRouterEnter(fn: () => void) {
  let fllPath = "";

  onBeforeRouteLeave(() => {
    fllPath = router.currentRoute.value.fullPath;
  });

  function handler() {
    if (router.currentRoute.value.fullPath === fllPath) {
      fn();
      console.log("afterIn");
    }
  }

  afterEachCallBackSet.add(handler);

  onUnmounted(() => {
    afterEachCallBackSet.delete(handler);
  });
}

export function autoRecoverscroll(scrollContainer: Ref<HTMLDivElement>) {
  let top = 0;
  let left = 0;

  onBeforeRouteLeave(() => {
    top = scrollContainer.value.scrollTop;
    left = scrollContainer.value.scrollLeft;
  });

  onAfterRouterEnter(() => {
    setTimeout(() => {
      scrollContainer.value.scrollTo({
        top,
        left,
      });
    }, 0);
  });
}
