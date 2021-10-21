<template>
  <!-- Footer -->
  <footer class="text-center bg-background-light">
    <div class="py-4">
      <!-- Section: Links -->
      <div class="text-center container">
        <nuxt-link class="px-2" to="/">Home</nuxt-link>
        <nuxt-link class="px-2" to="/">Blog</nuxt-link>
        <nuxt-link class="px-2" to="/">About</nuxt-link>
        <nuxt-link class="px-2" to="/">Contact</nuxt-link>
      </div>

      <!-- Section: Links -->
      <hr class="my-8" />

      <!-- Section: Text -->
      <div class="py-2 container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          fuga in nihil reiciendis sint, vero voluptas voluptatem. Facilis
          fugiat illum maxime neque nobis pariatur reiciendis suscipit tempora
          tempore voluptates! Ad alias animi consequuntur cumque, earum
          exercitationem facilis minima molestiae vero vitae. Autem cum deleniti
          doloremque eos eveniet libero nisi vitae!
        </p>
      </div>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <!-- Social Link Facebook -->
      <div class="lg:flex lg:items-center lg:justify-between mt-12 container">
        <div class="flex items-center justify-center">
          <nuxt-link to="/" class="text-dark px-2">
            <span class="sr-only">Facebook</span>
            <icon-facebook width="24" height="24"></icon-facebook>
          </nuxt-link>
          <!-- Social Link Twitter -->
          <nuxt-link to="/" class="text-dark px-2">
            <span class="sr-only">Twitter</span>
            <icon-twitter width="24" height="24"></icon-twitter>
          </nuxt-link>
          <!-- Social Link Linkedin -->
          <nuxt-link to="/" class="text-dark px-2">
            <span class="sr-only">Linkedin</span>
            <icon-linkedin width="24" height="24">Linkedin</icon-linkedin>
          </nuxt-link>
          <!-- Social Link Instagram -->
          <nuxt-link to="/" class="text-dark px-2">
            <span class="sr-only">Instagram</span>
            <icon-instagram width="24" height="24"></icon-instagram>
          </nuxt-link>
        </div>
        <!-- Section: Social -->

        <!-- Copyright -->
        <div class="text-center mt-4 lg:mt-0">© 2020 Copyright: Nuxt Bot</div>
        <!-- Copyright -->
      </div>
    </div>
  </footer>
  <!-- Footer -->
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
    IconLinkedin,
    IconInstagram,
  },
}
</script>

<style></style>
