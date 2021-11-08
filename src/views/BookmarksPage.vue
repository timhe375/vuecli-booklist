<template>
  <ItemTable
    :rows="bookMarkedFilter"
    :tabledata="`Merkliste`"
    @bookmark-changed="handleBookmarkedChange"
  />
</template>

<script>
import AllBooksPage from "@/views/AllBooksPage.vue";

export default {
  name: "AllBooksPage",
  extends: AllBooksPage,
  computed: {
    bookMarkedFilter() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
};
</script>
