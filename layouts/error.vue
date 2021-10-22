<template>
  <section>
    <div class="container min-h-screen-full" v-if="error.statusCode === 404">
      <Error404 :error="error" />
    </div>
  </section>
</template>

<script>
import error404 from "~/components/error/error404.vue"

export default {
  props: ["error"],
  layout: "error",
  components: {
    error404,
  },
}
</script>
