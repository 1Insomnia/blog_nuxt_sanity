<template>
  <div class="h-full">
    <h1 class="heading-1 text-mat-red text-center">404</h1>
    <h2 class="text-mat-red text-center text-xl mb-4">{{ error.message }}</h2>
    <nuxt-link class="block mt-10 animate-pulse" to="/">
      <h3 class="mb-4 text-center">Click on me to go back home</h3>
      <img
        class="object-fit mx-auto"
        src="~/assets/img/error/doge.png"
        alt=""
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
