<template>
  <div class="container min-h-screen-full" v-if="error.statusCode === 404">
    <div class="mt-10">
      <h1 class="heading-1 text-mat-red text-center">404</h1>
      <h2 class="text-xs text-center">
        Sorry we can't find the page you looking for, but here is a cute doge.
      </h2>
      <nuxt-link class="block mt-20" to="/">
        <h3 class="mb-2 text-center">Click on me to go back home</h3>
        <img
          class="object-fit mx-auto"
          src="~/assets/img/error/doge.png"
          alt=""
        />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
}
</script>
