<template>
  <section class="py-10">
    <div class="container">
      <h1 class="heading-1 mb-10">Latest Articles</h1>
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
</template>

<script>
import { groq } from "@nuxtjs/sanity"
import PostCardList from "~/components/blog/PostCardList.vue"

export default {
  async asyncData({ $sanity }) {
    // Groq fetching all posts
    const query = groq`*[_type == "post" ]{ title, slug, exercpt, publishedAt, categories[]->{title} }`
    const articles = await $sanity.fetch(query)
    return { articles }
  },
  components: {
    PostCardList,
  },
}
</script>
