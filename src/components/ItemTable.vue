<template>
  <section class="table-item">
    <h2 class="table-item__hl">{{ tabledata }}</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--isbn">ISBN</th>
          <th class="table-item__table-head--actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.isbn" class="table-item__table-row">
          <td>{{ row.title }}</td>
          <td>{{ row.isbn }}</td>
          <td>
            <button :class="variantClass" @click="handleButtonClick">
              {{ buttondata }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  emits: ["buttonClicked"],
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    tabledata: {
      type: String,
      default: "",
    },
    buttondata: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "",
    },
  },
  computed: {
    variantClass() {
      return this.variant
        ? `table-item__table-btn${this.variant}`
        : `table-item__table-btn${this.variant}`;
    },
  },

  methods: {
    handleButtonClick(bookId) {
      const index = this.rows.findIndex((row) => row.id === bookId);
      this.books[index].isBookmarked = !this.books[index].isBookmarked;
      this.$emit("buttonClicked", bookId);
    },
  },
};
</script>
