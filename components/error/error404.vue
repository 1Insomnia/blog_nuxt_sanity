<template>
  <div class="py-8 md:py-12 lg:py-16">
    <div class="container">
      <div class="">
        <!-- Image Container -->
        <h1 class="text-center md:hidden text-blue">404</h1>
        <div class="hidden md:block md:mb-10">
          <img
            class="object-fit max-w-lg bg-background mx-auto"
            src="~/assets/img/error/404.png"
            alt=""
          />
        </div>
        <!-- Message Container -->
        <div class="">
          <!-- Title -->
          <!-- Error Message -->
          <h1 class="text-center mb-4">{{ error.message }}</h1>
          <!-- Link to homepage -->
          <nuxt-link class="block text-center" to="/">
            However we have plenty more content on the
            <span class="text-blue">homepage</span> !
          </nuxt-link>
        </div>
      </div>
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
};
</script>
