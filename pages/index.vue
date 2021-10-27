<template>
  <div class="home-wrapper">
    <!-- Hero Components -->
    <Hero />
    <!-- Section displaying latest article -->
    <section id="articles" class="py-60 md:py-90 lg:py-120">
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
import { groq } from "@nuxtjs/sanity";
import { mapGetters } from "vuex";

import Hero from "@/components/includes/Hero.vue";
import ArticleCardList from "~/components/blog/ArticleCardList.vue";

export default {
  components: {
    ArticleCardList,
    Hero,
  },
  async asyncData({ $sanity, store }) {
    // Store groq query inside variable
    // Fetch all the last document which type = post and return 10 last
    const query = groq`*[_type == "post" ][0...10] | order(_createdAt desc){ title, slug, exercpt, publishedAt, categories[]->{title, slug} }`;

    // Fetch articles
    const articles = await $sanity.fetch(query);

    // Commit data to vuex store
    store.commit("setArticles", articles);
  },
  head() {
    return {
      title: "Home",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Nuxt Blog, Blog, Travel, Life Style",
        },
      ],
    };
  },
  computed: {
    // Import articles
    ...mapGetters(["articles", "seoTitles"]),
  },
};
</script>
