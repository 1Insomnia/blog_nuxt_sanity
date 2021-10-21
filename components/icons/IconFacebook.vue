<template>
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    shape-rendering="geometricPrecision"
    :width="width"
    :height="height"
  >
    <path
      d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
    ></path>
  </svg>
</template>

<script>
export default {
  name: 'i-facebook',
  props: {
    width: {
      type: String,
      require: true,
    },
    height: {
      type: String,
      require: true,
    },
  },
}
</script>

<style></style>
