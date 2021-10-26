<template>
  <section class="py-60 md:py-90 lg:py-120">
    <h1 class="mb-10 text-center">Latest Articles</h1>
    <SelectCategory :categories="categories" />
    <ArticleCardList :articles="articles" />
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { mapState } from "vuex";
import ArticleCardList from "~/components/blog/ArticleCardList.vue";
import SelectCategory from "~/components/blog/SelectCategory.vue";

export default {
  components: {
    ArticleCardList,
    SelectCategory,
  },
  async asyncData({ $sanity, store }) {
    // Groq query =  all posts ordered by desc
    const queryArticles = groq`*[_type == "post" ] | order(_createdAt desc){ title, slug, exercpt, publishedAt, categories[]->{title} }`;

    // Groq query = all categories
    const queryCategories = groq`*[_type == "category"]`;

    // Fetch posts
    const articles = await $sanity.fetch(queryArticles);
    // Fetch categories
    const categories = await $sanity.fetch(queryCategories);

    // Commit fetch data to vuex store
    store.commit("setArticles", articles);
    store.commit("setCategories", categories);
  },
  computed: {
    // Return Articles, Categories, activeCategory from vuex store
    ...mapState(["articles", "categories", "activeCategory"]),
  },
  watch: {
    async activeCategory() {
      // Store groq query inside a variable
      // Default : return all documents which type = post
      let queryArticles = groq`*[_type == "post"] | order(_createdAt desc){ title, slug, exercpt, publishedAt, categories[]->{title} }`;

      if (this.activeCategory === "all") {
        // If selected value = all then fetch all articles
        const articles = await this.$sanity.fetch(queryArticles);
        // Commit data to vuex store
        this.$store.commit("setArticles", articles);
      } else {
        // Query change to fetch all articles by category selected
        queryArticles = groq`*[_type == "post"  && "${this.activeCategory}" in categories[]->title]{ title, slug, exercpt, publishedAt, categories[]->{title} }`;
        // Fetch Data
        const articles = await this.$sanity.fetch(queryArticles);
        // Commit data to vuex store
        this.$store.commit("setArticles", articles);
      }
    },
  },
};
</script>
