<template>
  <section class="py-10 relative">
    <div class="container mx-auto px-5 lg:max-w-80-ch">
      <h1 class="mb-5 heading-1 text-foreground-dark">
        {{ title }}
      </h1>
      <div class="flex items-center text-sm text-light text-foreground-light">
        <span class="block">{{ formatDate(publishedAt) }} </span>
        <span class="block" v-if="categories">&nbsp;— &nbsp;</span>
        <nuxt-link
          v-for="category in categories"
          :key="category.title"
          :to="{ name: 'blog-category-slug', params: { slug: category.title } }"
          class="
            hover:text-foreground-dark
            text-sm
            no-underline
            hover:underline
          "
        >
          #{{ category.title }}
        </nuxt-link>
      </div>
      <div class="mt-5 prose">
        <SanityContent :blocks="body" />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content"

export default {
  async asyncData({ $sanity, params, error }) {
    // Query : fetch article by slug
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]{title, publishedAt , body, categories[]->{title} }`

    const article = await $sanity.fetch(query)

    if (Object.entries(article).length === 0 && params.slug !== undefined) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      })
    }

    const { title, body, categories, publishedAt } = article

    return { title, body, categories, publishedAt }
  },
  components: {
    SanityContent,
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
