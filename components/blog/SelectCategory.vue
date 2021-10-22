<template>
  <div class="max-w-md">
    <label
      for="selectCategory"
      class="text-foreground-light font-semibold mb-2 block"
    >
      Filter by categories
    </label>
    <select
      name="selectCategory"
      id="selectCategory"
      class="p-2 w-full block border border-gray-200"
      v-model="category"
      @change="handleChange"
    >
      <option value="all" selected>All</option>
      <option
        :value="category.title"
        v-for="category in categories"
        :key="category.title"
      >
        {{ category.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
    }
  },
  name: "SelectCategory",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleChange() {
      this.$store.commit("setActiveCategory", this.category)
    },
  },
}
</script>
