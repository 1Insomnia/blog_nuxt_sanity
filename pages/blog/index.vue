<template>
  <section class="py-8 md:py-12 lg:py-16">
    <h1 class="mb-10 text-center">Latest Articles</h1>
    <SelectCategory :categories="categories" />
    <PostCardList :articles="articles" />
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import PostCardList from "~/components/blog/PostCardList.vue"
import SelectCategory from "~/components/blog/SelectCategory.vue"

import { mapState } from "vuex"

export default {
  async asyncData({ $sanity, store }) {
    // Groq fetching all posts
    const queryArticles = groq`*[_type == "post" ]{ title, slug, exercpt, publishedAt, categories[]->{title} }`
    const queryCategories = groq`*[_type == "category"]`

    const articles = await $sanity.fetch(queryArticles)
    const categories = await $sanity.fetch(queryCategories)

    store.commit("setArticles", articles)
    store.commit("setCategories", categories)
  },
  components: {
    PostCardList,
    SelectCategory,
  },
  computed: {
    ...mapState(["articles", "categories", "activeCategory"]),
  },
  watch: {
    async activeCategory() {
      let queryArticles = groq`*[_type == "post"]{ title, slug, exercpt, publishedAt, categories[]->{title} }`

      if (this.activeCategory === "all") {
        const articles = await this.$sanity.fetch(queryArticles)
        this.$store.commit("setArticles", articles)
      } else {
        queryArticles = groq`*[_type == "post"  && "${this.activeCategory}" in categories[]->title]{ title, slug, exercpt, publishedAt, categories[]->{title} }`
        const articles = await this.$sanity.fetch(queryArticles)
        this.$store.commit("setArticles", articles)
      }
    },
  },
}
</script>
