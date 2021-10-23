<template>
  <section class="py-10">
    <!--  -->
    <!-- Showcase Container -->
    <div class="container pb-10 lg:pb-12">
      <h1 class="heading-1 mb-4 text-foreground-dark">Get In Touch</h1>
      <p class="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        quaerat obcaecati. Ut, quibusdam magnam? Cupiditate similique unde
        dolores omnis soluta!
      </p>
    </div>
    <!-- Showcase Container -->

    <div class="container">
      <div class="lg:flex lg:shadow-lg">
        <!-- Contact Information Container -->
        <div class="bg-mat-blue-grey text-white py-10 md:pt-10">
          <div class="container">
            <h2 class="heading-4 mb-6 lg:mb-8">Contact Information</h2>
            <p class="mb-6 lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              distinctio!
            </p>
            <div class="mb-4 lg:mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p>+1 (555) 123-45677</p>
            </div>
            <div class="mb-6 lg:mb-10 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p>nuxt.blog@domain.com</p>
            </div>
            <!-- Social Links -->
            <SocialLinks />
            <!-- Social Links -->
          </div>
        </div>
        <!-- Contact Information Container -->

        <!-- Contact Form Container -->
        <div class="py-10 lg:w-2/3">
          <div class="lg:max-w-3xl lg:mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Container -->
    <!--  -->
  </section>
</template>

<script>
import ContactForm from "@/components/includes/ContactForm.vue"
import SocialLinks from "@/components/includes/SocialLinks.vue"

export default {
  components: {
    ContactForm,
    SocialLinks,
  },
}
</script>
