import BookmarksPage from "@/views/BookmarksPage";

const routes = [
  {
    path: "/bookmarks",
    name: "Bookmarks",
    components: BookmarksPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
