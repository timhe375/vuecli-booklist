<template>
  <section class="table-item">
    <h2 class="table-item__hl">{{ tabledata }}</h2>
    <table class="table-item__table">
      <thead>
        <tr>
          <th
            v-for="(name, index) in tableHead"
            :key="index"
            :class="`table-item__table-head-${name.toLowerCase()}`"
          >
            {{ name }}
          </th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="row in tableBody"
          :key="row.id"
          class="table-item__table-row"
        >
          <slot :row="row" />
          <td>
            <router-link
              class="header__link-item"
              costum
              v-slot="{ navigate }"
              :to="`/books/${row.id}`"
              ><button @click="navigate">Detail</button></router-link
            >
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
    tableHead: {
      type: Array,
      default: () => [],
    },
    tableBody: {
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
