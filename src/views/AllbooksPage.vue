<template>
  <main class="wrapper">
    <ItemTable
      :rows="books"
      :tabledata="`Liste aller Bücher`"
      @bookmark-changed="handleBookmarkedChange"
    />
  </main>
</template>

<script>
import ItemTable from "@/components/ItemTable.vue";
export default {
  name: "AllBooksPage",
  components: {
    ItemTable,
  },
  data() {
    return {
      books: [],
    };
  },

  methods: {
    async handleBookmarkedChange(id) {
      const index = this.books.findIndex((book) => book.id === id);
      try {
        const newBookmarkedValue = !this.books[index].isBookmarked;

        const data = {
          ...this.books[index],
          isBookmarked: newBookmarkedValue,
        };

        await fetch(`http://localhost:3000/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        this.books[index].isBookmarked = newBookmarkedValue;
      } catch {
        alert("Fehler");
      }
    },
  },
  async created() {
    const url = "http://localhost:3000/books";
    const response = await fetch(url);
    const data = await response.json();

    this.books = data;
    // data.forEach((e) => {
    //   this.books.push(e);
    // });
  },
};
</script>
