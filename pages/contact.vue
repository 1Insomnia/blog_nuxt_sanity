<template>
  <section class="py-8 md:py-12 lg:py-16">
    <!-- Container Form + Image -->
    <div class="pb-4 md:pb-6 lg:pb-8">
      <div class="container">
        <div class="lg:flex lg:flex-row-reverse">
          <div class="mb-10 lg:w-1/2 lg:p-5 lg:flex lg:items-center lg:mb-0">
            <img
              class="object-cover mx-auto"
              style="max-height: 350px"
              src="~/assets/img/work.png"
              alt=""
            />
          </div>
          <div class="lg:w-1/2 lg:p-5">
            <h1 class="text-center mb-10 lg:text-left">Contact Me</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
    <!-- Container Informations -->
    <div class="pt-4 md:pt-6 lg:pt-8">
      <div class="container">
        <!-- Contact Informations Card -->
        <div
          class="
            p-7
            shadow-lg
            rounded
            max-w-xl
            mx-auto
            lg:p-10
            border border-accent-1
          "
        >
          <h2 class="text-xl text-center mb-8">Contact Information</h2>
          <div>
            <!-- Address -->
            <div class="flex items-center space-x-4">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                shape-rendering="geometricPrecision"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p>2091 Woodlawn Drive, New Berlin, Wisconsin</p>
            </div>
            <!-- Phone -->
            <div class="flex items-center space-x-4">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                shape-rendering="geometricPrecision"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                ></path>
              </svg>
              <p>+33 00 00 00 00</p>
            </div>
            <!-- Email -->
            <div class="flex items-center space-x-4">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                shape-rendering="geometricPrecision"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                ></path>
                <path d="M22 6l-10 7L2 6"></path>
              </svg>
              <p>myemail@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
