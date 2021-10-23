<template>
  <div class="min-h-screen" v-if="error.statusCode === 404">
    <Error404 :error="error" />
  </div>
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
