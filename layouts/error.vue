<template>
  <div v-if="error.statusCode === 404" class="min-h-screen">
    <Error404 :error="error" />
  </div>
</template>

<script>
import error404 from "~/components/error/error404.vue";

export default {
  components: {
    error404,
  },
  layout: "error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>
