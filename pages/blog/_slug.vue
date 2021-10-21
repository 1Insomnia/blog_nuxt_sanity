<template>
  <section class="py-10">
    <div v-if="isLoading">
      <Spinner />
    </div>
    <div v-else class="container mx-auto px-5 lg:max-w-screen-sm">
      <!-- Title -->
      <h1 class="mb-5 heading-1 text-foreground-dark">
        {{ article.title }}
      </h1>
      <!-- Title -->

      <!-- Block Date & Category -->
      <div class="flex items-center text-sm text-light text-foreground-light">
        <span class="block">{{ article.date }} </span>
        <span class="block">&nbsp;— &nbsp;</span>
        <nuxt-link
          to="https://blog.laravel.com/vapor"
          class="
            hover:text-foreground-dark
            text-sm
            no-underline
            hover:underline
          "
          >#{{ article.category }}</nuxt-link
        >
      </div>
      <!-- Block Date & Category -->

      <!-- Body -->
      <div class="mt-5">
        <p class="font-serif text-foreground leading-relaxed">
          {{ article.body }}
        </p>
      </div>
      <!-- Body -->
    </div>
  </section>
</template>

<script>
import Spinner from "@/components/includes/Spinner.vue"

export default {
  mounted() {
    const slug = this.$route.params.slug
    this.$store.dispatch("dispatchArticle", slug)

    if (this.article) {
      this.isLoading = false
    } else {
      this.isLoading = true
    }
  },
  computed: {
    article() {
      return this.$store.state.article
    },
  },
  data() {
    return {
      isLoading: true,
    }
  },
  components: {
    Spinner,
  },
  head() {
    return {
      title: this.article.title,
    }
  },
}
</script>

<style scoped>
.article {
  white-space: pre-line;
}
</style>
