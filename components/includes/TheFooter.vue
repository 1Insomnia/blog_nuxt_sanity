<template>
  <!-- Footer -->
  <footer class="text-center bg-background-light py-60">
    <div class="py-4">
      <!-- Section: Links -->
      <div class="text-center container">
        <nuxt-link class="px-2 transition duration-300 hover:text-blue" to="/"
          >Home</nuxt-link
        >
        <nuxt-link
          class="px-2 transition duration-300 hover:text-blue"
          to="/blog"
          >Blog</nuxt-link
        >
        <nuxt-link
          class="px-2 transition duration-300 hover:text-blue"
          to="/about"
          >About</nuxt-link
        >
        <nuxt-link
          class="px-2 transition duration-300 hover:text-blue"
          to="/contact"
          >Contact</nuxt-link
        >
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
          <!-- Social Link Facebook -->
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="text-dark px-2 transition duration-300 hover:text-blue"
            aria-label="open external link to facebook"
          >
            <span class="sr-only">Facebook</span>
            <icon-facebook></icon-facebook>
          </a>

          <!-- Social Link Twitter -->
          <a
            href="https://twitter.com"
            target="_blank"
            aria-label="open external link to twitter"
            class="text-dark px-2 transition duration-300 hover:text-blue"
          >
            <span class="sr-only">Twitter</span>
            <icon-twitter></icon-twitter>
          </a>

          <!-- Social Link Linkedin -->
          <a
            href="https://www.linkedin.com"
            target="_blank"
            aria-label="open external link to linkedin"
            class="text-dark px-2 transition duration-300 hover:text-blue"
          >
            <span class="sr-only">Linkedin</span>
            <icon-linkedin>Linkedin</icon-linkedin>
          </a>

          <!-- Social Link Instagram -->
          <a
            href="https://www.instagram.com"
            target="_blank"
            aria-label="open external link to instagram"
            class="text-dark px-2 transition duration-300 hover:text-blue"
          >
            <span class="sr-only">Instagram</span>
            <icon-instagram></icon-instagram>
          </a>
        </div>

        <!-- Copyright -->
        <div class="text-center mt-4 lg:mt-0">© 2020 Copyright: Nuxt Bot</div>
      </div>
    </div>
  </footer>
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
