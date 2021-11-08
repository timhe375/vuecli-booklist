import { createRouter, createWebHistory } from "vue-router";
import AllBooksPage from "@/views/AllBooksPage.vue";
import BookmarksPage from "@/views/BookmarksPage";
import BookDetailsPage from "@/views/BookDetailsPage";
import CreateNewBook from "@/views/CreateNewBook";

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
  {
    path: "/books/:id",
    name: "BookDetailsPage",
    component: BookDetailsPage,
  },
  {
    path: "/create-new-book",
    name: "CreateNewBook",
    component: CreateNewBook,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
