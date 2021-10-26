<template>
  <section id="hero">
    <div
      class="
        bg-hero-pattern
        min-h-screen-full
        text-white
        bg-cover bg-center bg-no-repeat bg-fixed
        flex
        items-center
        justify-center
      "
    >
      <!-- Middle Container -->
      <div class="text-center flex flex-col items-center">
        <h1 class="inktrap opacity-70 leading-none mb-4">Nuxt Travel</h1>
        <h3 class="mb-10 opacity-50 uppercase">
          Travel - Story Telling - Lifestyle - Growth.
        </h3>
        <nuxt-link to="#articles">
          <span class="sr-only">Anchor to articles</span>
          <svg
            class="w-12 h-12"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            shape-rendering="geometricPrecision"
            viewBox="0 0 24 24"
          >
            <path d="M6 9l6 6 6-6"></path>
          </svg>
        </nuxt-link>
      </div>
      <div class="absolute bottom-4">
        <SocialLinks />
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from "@/components/includes/SocialLinks.vue"

export default {
  name: "Hero",
  components: {
    SocialLinks,
  },
}
</script>
