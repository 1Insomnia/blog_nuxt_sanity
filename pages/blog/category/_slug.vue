<template>
  <section class="py-10">
    <div class="container mx-auto px-5 lg:max-w-80-ch">
      <h1 class="mb-10 heading-1">Category : {{ title }}</h1>
      <PostCardList :articles="articles" />
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import PostCardList from "@/components/blog/PostCardList.vue"
import { mapGetters } from "vuex"

export default {
  async asyncData({ $sanity, params, error, store }) {
    const queryArticlesByCategory = groq`*[_type == "post"  && "${params.slug}" in categories[]->slug.current]{ title, slug, exercpt, publishedAt, categories[]->{title} }`

    const articles = await $sanity.fetch(queryArticlesByCategory)
    if (Object.entries(articles).length === 0 && params.slug !== undefined) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      })
    }
    store.commit("setArticles", articles)
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
  computed: {
    ...mapGetters(["articles"]),
    title() {
      return this.articles[0].categories[0].title
    },
  },
}
</script>
