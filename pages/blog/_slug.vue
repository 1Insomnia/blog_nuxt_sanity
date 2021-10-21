<template>
  <section class="py-10">
    <div class="container mx-auto px-5 lg:max-w-screen-sm">
      <h1 class="mb-5 heading-1 text-foreground-dark">
        {{ title }}
      </h1>
      <div class="flex items-center text-sm text-light text-foreground-light">
        <span class="block">{{ formatDate(createdAt) }} </span>
        <span class="block" v-if="categories">&nbsp;— &nbsp;</span>
        <nuxt-link
          v-for="category in categories"
          :key="category.title"
          to="https://blog.laravel.com/vapor"
          class="
            hover:text-foreground-dark
            text-sm
            no-underline
            hover:underline
          "
          >#{{ category.title }}
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
  data() {
    return {
      title: "",
      body: [],
      createdAt: "",
      categories: [],
    }
  },
  async fetch() {
    const query = groq`*[_type == "post" && slug.current == "${this.$route.params.slug}"][0]{title, _createdAt ,body, categories[]->{title} }`
    const article = await this.$sanity.fetch(query)
    const { title, body, _createdAt, categories } = article

    this.title = title
    this.body = body
    this.createdAt = _createdAt
    this.categories = categories
  },
  components: {
    SanityContent,
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
}
</script>

<style scoped>
.article {
  white-space: pre-line;
}
</style>
