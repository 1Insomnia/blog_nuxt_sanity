<template>
  <div class="container lg:max-w-screen-md">
    <label
      for="selectCategory"
      class="text-foreground-light font-semibold mb-2 block"
    >
      Filter by categories
    </label>
    <select
      id="selectCategory"
      v-model="category"
      name="selectCategory"
      class="
        py-3
        px-2
        w-full
        block
        border border-gray-200
        focus:outline-none focus:border-blue
      "
      @change="handleChange"
    >
      <option value="all">All</option>
      <option v-for="c in categories" :key="c.title" :value="c.title">
        {{ c.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectCategory",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      category: "all",
    };
  },
  watch: {
    $route() {
      this.category = "all";
    },
  },
  methods: {
    handleChange() {
      this.$store.commit("setActiveCategory", this.category);
    },
  },
};
</script>
