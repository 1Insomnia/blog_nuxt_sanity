<template>
  <div class="home-wrapper">
    <Hero />
    <section class="py-10" id="articles">
      <div class="container">
        <h2 class="heading-1 mb-10">Latest Articles</h2>
        <div class="text-lg text-grey-darkest leading-normal spaced-y-6">
          <p>
            Over the years I’ve published a few dozen articles — some more
            noteworthy than others.
          </p>
          <p>Here are some of my personal favorites.</p>
        </div>
        <PostCardList :articles="articles" />
      </div>
    </section>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity"

import Hero from "@/components/includes/Hero.vue"
import PostCardList from "~/components/blog/PostCardList.vue"

export default {
  async asyncData({ $sanity }) {
    // Groq fetching all posts
    const query = groq`*[_type == "post" ][0...10] | order(_createdAt desc){ title, slug, exercpt, publishedAt, categories[]->{title} }`
    const articles = await $sanity.fetch(query)
    return { articles }
  },
  components: {
    PostCardList,
    Hero,
  },
}
</script>
