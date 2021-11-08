<template>
  <main class="wrapper">
    <ItemTable
      :rows="bookMarkedFilter"
      buttondata="- entfernen"
      :tabledata="`Merkliste`"
      variant="-remove"
      @buttonClicked="handleDelete"
    />
    <ItemTable
      :rows="books"
      buttondata="+ hinzufügen"
      :tabledata="`Liste aller Bücher`"
      variant="-add"
      @buttonClicked="handleAdd"
    />
  </main>
</template>

<script>
import ItemTable from "./components/ItemTable.vue";
export default {
  name: "App",
  components: {
    ItemTable,
  },
  data() {
    return {
      books: [],
    };
  },
  computed: {
    bookMarkedFilter() {
      return this.books.filter((book) => book.isBookmarked);
    },
  },
  methods: {},
  async created() {
    const url = "http://localhost:3000/books";
    const response = await fetch(url);
    const data = await response.json();

    data.forEach((e) => {
      this.books.push(e);
    });
  },
};
</script>
