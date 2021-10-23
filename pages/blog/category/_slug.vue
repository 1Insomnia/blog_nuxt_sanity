<template>
  <section class="py-10">
    <div class="container mx-auto px-5 lg:max-w-80-ch">
      <h1 class="mb-12"></h1>
      <PostCardList :articles="articlesByCategory" />
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import PostCardList from "@/components/blog/PostCardList.vue"

export default {
  async asyncData({ $sanity, params, error }) {
    const queryArticlesByCategory = groq`*[_type == "post"  && "${params.slug}" in categories[]->title]{ title, slug, exercpt, publishedAt, categories[]->{title} }`

    const articlesByCategory = await $sanity.fetch(queryArticlesByCategory)

    if (
      Object.entries(articlesByCategory).length === 0 &&
      params.slug !== undefined
    ) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      })
    }

    return { articlesByCategory }
  },
  components: {
    PostCardList,
  },
  methods: {
    formatDate(date) {
      if (!date) return
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
}
</script>

<style></style>
