<template>
  <div class="container lg:max-w-screen-md">
    <label
      for="selectCategory"
      class="text-foreground-light font-semibold mb-2 block"
    >
      Filter by categories
    </label>
    <select
      name="selectCategory"
      id="selectCategory"
      class="py-3 px-2 w-full block border border-gray-200"
      v-model="category"
      @change="handleChange"
    >
      <option value="all">All</option>
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
      category: "all",
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
  watch: {
    $route() {
      this.category = "all"
    },
  },
}
</script>
