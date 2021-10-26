<template>
  <div class="home-wrapper">
    <!-- Hero Components -->
    <Hero />
    <!-- Section displaying latest article -->
    <section class="py-60 md:py-90 lg:py-120" id="articles">
      <div class="container lg:max-w-screen-md">
        <h2 class="mb-10 text-center">Latest Articles</h2>
        <div class="text-center">
          <p>
            Over the years I’ve published a few dozen articles — some more
            noteworthy than others.
          </p>
          <p>Here are some of my personal favorites.</p>
        </div>
      </div>
      <!-- Article list component -->
      <ArticleCardList :articles="articles" />
    </section>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity"

import Hero from "@/components/includes/Hero.vue"
import ArticleCardList from "~/components/blog/ArticleCardList.vue"

import { mapGetters } from "vuex"

export default {
  async asyncData({ $sanity, store }) {
    // Store groq query inside variable
    // Fetch all the last document which type = post and return 10 last
    const query = groq`*[_type == "post" ][0...10] | order(_createdAt desc){ title, slug, exercpt, publishedAt, categories[]->{title, slug} }`

    // Fetch articles
    const articles = await $sanity.fetch(query)

    // Commit data to vuex store
    store.commit("setArticles", articles)
  },
  computed: {
    // Import articles
    ...mapGetters(["articles"]),
  },
  components: {
    ArticleCardList,
    Hero,
  },
}
</script>

<style scoped>
#articles {
  scroll-padding-top: calc(60px + 80px);
}

@media (min-width: 768px) {
  #articles {
    scroll-padding-top: calc(90px + 80px);
  }
}

@media (min-width: 1024px) {
  #articles {
    scroll-padding-top: calc(120px + 80px);
  }
}
</style>
