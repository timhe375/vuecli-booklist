<template>
  <h1>Name des Buches:{{ book.title }}</h1>
  <p>ISBN: {{ book.isbn }}</p>
  <p>Autor: {{ book.author }}</p>
  <p>Herausgeber: {{ book.publisher }}</p>
  <p>Preis des Buches: {{ book.price }}</p>
  <p>Seitenanzahl: {{ book.numPages }}</p>
  <GoBack />
</template>

<script>
import GoBack from "@/components/GoBackButton";
export default {
  components: {
    GoBack,
  },
  data() {
    return {
      book: [],
    };
  },
  async created() {
    const url = "http://localhost:3000/books/" + this.$route.params.id;
    const response = await fetch(url);
    const data = await response.json();

    this.book = data;
  },
};
</script>
