<template>
  <section class="py-60 md:py-90 lg:py-120">
    <div class="container max-w-screen-md">
      <h1 class="heading-1 mb-10">About Me</h1>
      <div class="">
        <image-text-display
          image-name="about-1.jpg"
          image-alt="Alternative image"
          title="nam veritatis corporis"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ipsum
          ducimus, atque voluptate natus quidem odit saepe minus, delectus nemo
          pariatur ratione placeat! Porro, nam veritatis corporis quibusdam
          adipisci quasi.
        </image-text-display>
        <image-text-display
          image-name="about-2.jpg"
          image-alt="Alternative image"
          title="atque voluptate"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ipsum
          ducimus, atque voluptate natus quidem odit saepe minus, delectus nemo
          pariatur ratione placeat! Porro, nam veritatis corporis quibusdam
          adipisci quasi.
        </image-text-display>
        <image-text-display
          image-name="about-3.jpg"
          image-alt="Alternative image"
          title="Dolor Sit Amet"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ipsum
          ducimus, atque voluptate natus quidem odit saepe minus, delectus nemo
          pariatur ratione placeat! Porro, nam veritatis corporis quibusdam
          adipisci quasi.
        </image-text-display>
      </div>
    </div>
  </section>
</template>

<script>
import ImageTextDisplay from "@/components/includes/ImageTextDisplay.vue";

export default {
  components: {
    ImageTextDisplay,
  },
};
</script>
