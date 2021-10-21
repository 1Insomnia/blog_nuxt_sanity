<template>
  <svg
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    shape-rendering="geometricPrecision"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
    ></path>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
</template>

<script>
export default {
  name: 'i-linkedin',
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
