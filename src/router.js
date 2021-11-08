import { createRouter, createWebHistory } from "vue-router";
import AllBooksPage from "@/views/AllBooksPage.vue";
import BookmarksPage from "@/views/BookmarksPage";

const routes = [
  {
    path: "/",
    name: "AllBooksPage",
    component: AllBooksPage,
  },
  {
    path: "/bookmarks",
    name: "BookmarksPage",
    component: BookmarksPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
