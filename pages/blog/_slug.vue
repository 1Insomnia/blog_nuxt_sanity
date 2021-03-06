<template>
  <section class="py-60 md:py-90 lg:py-120">
    <div class="container lg:max-w-80-ch">
      <h1 class="mb-10">
        {{ article.title }}
      </h1>
      <div v-if="article.image" class="mb-4">
        <img :src="$urlFor(article.image)" class="object-fit" alt="" />
      </div>
      <div class="flex items-center text-sm text-light text-foreground-light">
        <span class="block">{{ formatDate(article.publishedAt) }} </span>
        <span v-if="article.categories" class="block">&nbsp;— &nbsp;</span>
        <nuxt-link
          v-for="category in article.categories"
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
        <SanityContent :blocks="article.body" />
      </div>
    </div>
  </section>
</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { SanityContent } from "@nuxtjs/sanity/dist/components/sanity-content";

import { mapGetters } from "vuex";

export default {
  components: {
    SanityContent,
  },
  async asyncData({ $sanity, params, error, store }) {
    // Query : fetch article by slug
    const query = groq`*[_type == "post" && slug.current == "${params.slug}"][0]{title, publishedAt , body, mainImage, categories[]->{title, slug} }`;

    // Fetch Article
    const article = await $sanity.fetch(query);

    // If No Data Return return 404
    if (Object.entries(article).length === 0 && params.slug !== undefined) {
      return error({
        statusCode: 404,
        message: `Post ${params.slug} not found`,
      });
    }

    // Set Article in store
    store.commit("setArticle", {
      title: article.title,
      body: article.body,
      categories: article.categories,
      publishedAt: article.publishedAt,
      image: article.mainImage,
    });
  },
  head() {
    return {
      title: this.article.title,
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
    ...mapGetters(["article"]),
  },
  methods: {
    formatDate(date) {
      if (!date) return "";
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
