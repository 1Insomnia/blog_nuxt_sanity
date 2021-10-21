<template>
  <svg
    data-v-17014a70=""
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    shape-rendering="geometricPrecision"
    :width="width"
    :height="height"
    style="color: currentcolor"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"></path>
  </svg>
</template>

<script>
export default {
  name: 'i-instagram',
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
