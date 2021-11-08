<template>
  <h1>Neue Bücher</h1>
  <form @submit.prevent="submitForm">
    <section v-for="(field, index) in fields" :key="index">
      <label :for="`field-${field.labelText.toLowerCase()}`">{{
        field.labelText
      }}</label>
      <br />
      <input
        :id="`field-${field.labelText.toLowerCase()}`"
        v-model="field.value"
        type="text"
      />
    </section>
    <button>Add book</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          labelText: "id",
          value: "",
        },
        {
          labelText: "title",
          value: "",
        },
        {
          labelText: "subtitle",
          value: "",
        },
        {
          labelText: "isbn",
          value: "",
        },
        {
          labelText: "athor",
          value: "",
        },
        {
          labelText: "publisher",
          value: "",
        },
        {
          labelText: "price",
          value: "",
        },
        {
          labelText: "numPages",
          value: "",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      const data = {};
      this.fields.forEach((field) => {
        data[field.labelText] = field.value;
      });
      data.isBookmarked = false;
      await fetch(`http://localhost:3000/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      this.fields = this.fields.map((field) => ({
        labelText: field.labelText,
        value: "",
      }));
    },
  },
};
</script>
