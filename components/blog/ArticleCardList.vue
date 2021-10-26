<template>
  <!-- Post Card List Outter Wrapper -->
  <div class="container lg:max-w-screen-md">
    <!-- Post Card Wrapper + Loop -->
    <div v-if="articles">
      <PostCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <!-- Post Card Wrapper + Loop -->

    <!-- Post Card No Articles Loaded -->
    <div v-else class="text-mat-red font-bold">Oops No Articles!</div>
    <!-- Post Card No Articles Loaded -->
  </div>
  <!-- Post Card List Outter Wrapper -->
</template>

<script>
import PostCard from "~/components/blog/ArticleCard.vue"

export default {
  components: {
    PostCard,
  },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
