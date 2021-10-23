<template>
  <div class="flex items-center">
    <nuxt-link to="/" class="text-dark pr-4">
      <span class="sr-only">Facebook</span>
      <icon-facebook width="24" height="24"></icon-facebook>
    </nuxt-link>
    <!-- Social Link Twitter -->
    <nuxt-link to="/" class="text-dark px-4">
      <span class="sr-only">Twitter</span>
      <icon-twitter width="24" height="24"></icon-twitter>
    </nuxt-link>
    <!-- Social Link Linkedin -->
    <nuxt-link to="/" class="text-dark px-4">
      <span class="sr-only">Linkedin</span>
      <icon-linkedin width="24" height="24">Linkedin</icon-linkedin>
    </nuxt-link>
    <!-- Social Link Instagram -->
    <nuxt-link to="/" class="text-dark pl-4">
      <span class="sr-only">Instagram</span>
      <icon-instagram width="24" height="24"></icon-instagram>
    </nuxt-link>
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
