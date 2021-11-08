<template>
  <section class="table-item">
    <h2 class="table-item__hl">{{ tabledata }}</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="table-item__table-head-name">Name</th>
          <th class="table-item__table-head--isbn">ISBN</th>
          <th class="table-item__table-head--author">Autor</th>
          <th class="table-item__table-head--pages">Pages</th>
          <th class="table-item__table-head--actions"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.id" class="table-item__table-row">
          <td>{{ row.title }}</td>
          <td>{{ row.isbn }}</td>
          <td>{{ row.author }}</td>
          <td>{{ row.numPages }}</td>
          <td>
            <button
              :class="{
                'table-item__table-btn-remove': row.isBookmarked,
                'table-item__table-btn-add': !row.isBookmarked,
              }"
              @click="bookmarkChanged(row)"
            >
              <span v-if="row.isBookmarked"> - entfernen </span>
              <span v-else>+ hinzufügen</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  emits: ["bookmark-changed"],
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
    tabledata: {
      type: String,
      default: "",
    },
  },

  methods: {
    bookmarkChanged(row) {
      this.$emit("bookmark-changed", row.id);
    },
  },
};
</script>
