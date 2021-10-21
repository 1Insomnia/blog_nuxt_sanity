<template>
  <!-- Post Card Wrapper -->
  <div
    class="
      p-8
      shadow-lg
      max-w-80-ch
      transform
      transition
      duration-200
      ease-linear
      hover:shadow-xl hover:-translate-y-2
    "
  >
    <!-- Post Card  Title + Dynamic Link -->
    <h3 class="heading-2 mb-4">
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: article.slug.current } }"
        class="text-foreground-dark font-bold no-underline hover:underline"
      >
        {{ article.title }}
      </nuxt-link>
    </h3>
    <!-- Post Card  Title + Dynamic Link -->

    <!-- Post Card Category -->
    <div>
      <h4
        class="text-gray-700"
        v-for="category in article.categories"
        :key="category.title"
      >
        # {{ category.title }}
      </h4>
    </div>
    <!-- Post Card Category -->

    <!-- Post Card Exercpt -->
    <p class="paragraph-base text-gray-900">
      {{ article.exercpt }}
    </p>
    <!-- Post Card Exercpt -->

    <!-- Post Card Separator -->
    <hr class="bg-gray-300 mt-2 mb-4" />
    <!-- Post Card Separator -->

    <!-- Post Card Footer -->
    <div class="md:flex md:items-center md:justify-between">
      <!-- Post Card Dynamic Link -->
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: article.slug.current } }"
        class="hover:text-foreground-dark text-sm no-underline hover:underline"
      >
        Read this article →
      </nuxt-link>
      <!-- Post Card Dynamic Link -->

      <!-- Post Card Date -->
      <div class="text-gray-900 text-sm mt-2 md:mt-0">
        {{ article._createdAt }}
      </div>
      <!-- Post Card Date -->
    </div>
    <!-- Post Card Footer -->
  </div>
  <!-- Post Card Wrapper -->
</template>

<script>
export default {
  name: "PostCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
