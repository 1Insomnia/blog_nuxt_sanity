<template>
  <section>
    <div class="container min-h-screen-full" v-if="error.statusCode === 404">
      <h1 class="heading-1 text-mat-red text-center">404</h1>
      <nuxt-link class="block mt-10" to="/">
        <h2 class="text-mat-red text-center text-xl mb-4">
          "{{ error.message }}"
        </h2>
        <h3 class="mb-4 text-center">Click on me to go back home</h3>
        <img
          class="object-fit mx-auto"
          src="~/assets/img/error/doge.png"
          alt=""
        />
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
}
</script>
