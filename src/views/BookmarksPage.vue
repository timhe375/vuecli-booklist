<template>
  <ItemTable
    :tabledata="`Meine Merkliste`"
    :tableHead="tableHead"
    :tableBody="bookMarkedFilter"
    @bookmark-changed="handleBookmarkedChange"
  >
    <template v-slot:default="{ row }">
      <td>{{ row.title }}</td>
      <td>{{ row.isbn }}</td>
    </template>
  </ItemTable>
</template>

<script>
import AllBooksPage from "@/views/AllBooksPage.vue";

export default {
  name: "AllBooksPage",
  extends: AllBooksPage,
  data() {
    return {
      tableHead: ["Name", "ISBN"],
    };
  },
  computed: {
    bookMarkedFilter() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
};
</script>
