<template>
  <div
    class="min-h-screen-full py-10 lg:flex lg:items-center lg:justify-center"
  >
    <div class="lg:flex lg:items-center lg:gap-12">
      <div class="mb-4">
        <h1 class="heading-1 text-center">404</h1>
        <h2 class="text-center text-xl">{{ error.message }}</h2>
        <nuxt-link class="block mt-10" to="/">
          <h3 class="mb-4 text-center">
            This article doesn't exist but we have plenty more on thehomepage
            <span class="text-mat-blue">homepage</span> !
          </h3>
        </nuxt-link>
      </div>
      <img
        class="object-fit max-w-lg bg-background mx-auto"
        src="~/assets/img/work.png"
        alt=""
      />
    </div>
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
