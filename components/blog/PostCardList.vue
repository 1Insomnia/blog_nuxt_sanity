<template>
  <!-- Post Card List Outter Wrapper -->
  <div class="container lg:max-w-screen-md">
    <!-- Post Card Wrapper + Loop -->
    <div v-if="articles" class="space-y-10 mt-12">
      <PostCard
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <!-- Post Card Wrapper + Loop -->

    <!-- Post Card No Articles Loaded -->
    <div v-else class="text-mat-red font-bold">No Articles!</div>
    <!-- Post Card No Articles Loaded -->
  </div>
  <!-- Post Card List Outter Wrapper -->
</template>

<script>
import PostCard from "@/components/blog/PostCard.vue"

export default {
  name: "PostCardList",
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
