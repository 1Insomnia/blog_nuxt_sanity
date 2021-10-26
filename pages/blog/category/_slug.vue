<template>
  <section class="py-60 md:py-90 lg:py-120">
    <div class="container lg:max-w-80-ch">
      <h1 class="mb-10">Category : {{ title }}</h1>
      <ArticleCardList :articles="articles" />
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { mapGetters } from "vuex";

import ArticleCardList from "~/components/blog/ArticleCardList.vue";

export default {
  components: {
    ArticleCardList,
  },
  async asyncData({ $sanity, params, error, store }) {
    // Query to fetch one article by category slug
    const queryArticlesByCategory = groq`*[_type == "post"  && "${params.slug}" in categories[]->slug.current]{ title, slug, exercpt, publishedAt, categories[]->{title} }`;

    // Fetch data from sanity repo
    const articles = await $sanity.fetch(queryArticlesByCategory);

    // If no data are returned then return error 404
    if (Object.entries(articles).length === 0 && params.slug !== undefined) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      });
    }
    // If articles are fetch then commit to store
    store.commit("setArticles", articles);
  },
  computed: {
    ...mapGetters(["articles"]),
    // Return title of the category
    title() {
      return this.articles[0].categories[0].title;
    },
  },
  methods: {
    // Method to format published data
    formatDate(date) {
      if (!date) return;
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
