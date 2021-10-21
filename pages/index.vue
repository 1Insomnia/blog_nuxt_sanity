<template>
  <div class="home-wrapper">
    <Hero />
    <section class="py-10">
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
import Hero from "@/components/includes/Hero.vue"
import PostCardList from "~/components/blog/PostCardList.vue"

import { mapActions } from "vuex"

export default {
  components: {
    PostCardList,
    Hero,
  },
  computed: {
    articles() {
      return this.$store.state.articles
    },
  },
  methods: {
    ...mapActions(["dispatchArticles"]),
  },
  mounted() {
    this.dispatchArticles()
  },
}
</script>
