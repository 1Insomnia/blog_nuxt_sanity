<template>
  <section class="py-8 md:py-12 lg:py-16">
    <div class="container lg:max-w-80-ch">
      <h1 class="mb-10">Category : {{ title }}</h1>
      <PostCardList :articles="articles" />
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import { mapGetters } from "vuex"

import PostCardList from "@/components/blog/PostCardList.vue"

export default {
  async asyncData({ $sanity, params, error, store }) {
    // Query to fetch one article by category slug
    const queryArticlesByCategory = groq`*[_type == "post"  && "${params.slug}" in categories[]->slug.current]{ title, slug, exercpt, publishedAt, categories[]->{title} }`

    // Fetch data from sanity repo
    const articles = await $sanity.fetch(queryArticlesByCategory)

    // If no data are returned then return error 404
    if (Object.entries(articles).length === 0 && params.slug !== undefined) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      })
    }
    // If articles are fetch then commit to store
    store.commit("setArticles", articles)
  },
  components: {
    PostCardList,
  },
  methods: {
    // Method to format published data
    formatDate(date) {
      if (!date) return
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
  computed: {
    ...mapGetters(["articles"]),
    // Return title of the category
    title() {
      return this.articles[0].categories[0].title
    },
  },
}
</script>
