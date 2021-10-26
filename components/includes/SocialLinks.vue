<template>
  <div class="flex items-center">
    <a
      href="https://www.facebook.com"
      aria-label="open external link to facebook"
      target="_blank"
      class="text-dark pr-4 transition duration-300 hover:text-blue"
    >
      <span class="sr-only">Facebook</span>
      <icon-facebook></icon-facebook>
    </a>
    <!-- Social Link Twitter -->
    <a
      href="https://twitter.com"
      aria-label="open external link to twitter"
      target="_blank"
      class="text-dark px-4 transition duration-300 hover:text-blue"
    >
      <span class="sr-only">Twitter</span>
      <icon-twitter></icon-twitter>
    </a>
    <!-- Social Link Linkedin -->
    <a
      href="https://www.linkedin.com"
      aria-label="open external link to linkedin"
      target="_blank"
      class="text-dark px-4 transition duration-300 hover:text-blue"
    >
      <span class="sr-only">Linkedin</span>
      <icon-linkedin>Linkedin</icon-linkedin>
    </a>
    <!-- Social Link Instagram -->
    <a
      href="https://www.instagram.com"
      aria-label="open external link to instagram"
      target="_blank"
      class="text-dark pl-4 transition duration-300 hover:text-blue"
    >
      <span class="sr-only">Instagram</span>
      <icon-instagram></icon-instagram>
    </a>
  </div>
</template>

<script>
import IconTwitter from "@/components/icons/IconTwitter.vue"
import IconFacebook from "@/components/icons/IconFacebook.vue"
import IconInstagram from "@/components/icons/IconInstagram.vue"
import IconLinkedin from "@/components/icons/IconLinkedin.vue"

export default {
  components: {
    IconTwitter,
    IconFacebook,
    IconInstagram,
    IconLinkedin,
  },
}
</script>
