<template>
  <section class="py-10">
    <div class="container">
      <h1 class="heading-1 mb-4">Latest Articles</h1>
      <SelectCategory :categories="categories" />
      <PostCardList :articles="articles" />
    </div>
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
