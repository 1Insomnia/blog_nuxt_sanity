<template>
  <div class="mb-4 md:mb-8 lg:mb-12">
    <div>
      <img class="object-cover pb-4" :src="imageSource" :alt="imageAltText" />
      <h6>{{ title }}</h6>
    </div>
    <div class="mt-4">
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageAltText() {
      if (this.imageName !== "") {
        return this.imageAlt;
      }
      return this.imageName + " picture";
    },
    imageSource() {
      return require(`~/assets/img/about/${this.imageName}`);
    },
  },
};
</script>
