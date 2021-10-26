<template>
  <header id="header" class="fixed top-0 left-0 w-full shadow-lg">
    <nav class="bg-background-light">
      <div class="container">
        <div class="relative flex items-center justify-between h-20">
          <!-- Nav button container -->
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                p-2
                rounded-md
                text-foreground
                hover:text-foreground-dark
                focus:outline-none
              "
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click.prevent="toggleNav"
            >
              <svg
                class="h-6 w-6"
                :class="{ hidden: showMenu }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
              <svg
                class="h-6 w-6"
                :class="{ hidden: !showMenu }"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span class="sr-only">Open main menu</span>
            </button>
          </div>
          <!-- Flex wrapper desktop nav -->
          <div
            class="
              flex-1 flex
              items-center
              justify-center
              sm:items-stretch sm:justify-between
            "
          >
            <!-- Logo -->
            <nuxt-link to="/" class="flex-shrink-0 flex items-center font-bold">
              Nux Blog
            </nuxt-link>
            <!-- Nav Desktop -->
            <div class="hidden sm:block sm:ml-6">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <nuxt-link
                  to="/"
                  class="
                    text-foreground
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    uppercase
                    relative
                    nav-link
                  "
                  aria-current="page"
                  aria-label="open internal link to home page"
                  >Home</nuxt-link
                >
                <nuxt-link
                  to="/blog"
                  class="
                    text-foreground
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    uppercase
                    relative
                    nav-link
                  "
                  aria-label="open internal link to blog page"
                  >Blog</nuxt-link
                >

                <nuxt-link
                  to="/about"
                  class="
                    text-foreground
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    uppercase
                    relative
                    nav-link
                  "
                  aria-label="open internal link to about page"
                  >About</nuxt-link
                >
                <nuxt-link
                  to="/contact"
                  class="
                    text-foreground
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    uppercase
                    relative
                    nav-link
                  "
                  aria-label="open internal link to contact page"
                  >Contact</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div
        :class="[{ block: showMenu }, { hidden: !showMenu }]"
        class="mobile-nav sm:hidden shadow-lg h-screen-full"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <nuxt-link
            to="/"
            class="
              text-foreground
              block
              px-3
              uppercase
              py-2
              rounded-md
              text-base
              font-medium
            "
            aria-current="page"
            aria-label="open internal link to home page"
            >Home</nuxt-link
          >

          <nuxt-link
            to="/blog"
            class="
              text-foreground
              block
              px-3
              py-2
              rounded-md
              text-base
              font-medium
              uppercase
            "
            aria-label="open internal link to blog page"
            >Blog</nuxt-link
          >

          <nuxt-link
            to="/about"
            class="
              text-foreground
              block
              px-3
              py-2
              rounded-md
              text-base
              uppercase
              font-medium
            "
            aria-label="open internal link to about page"
            >About</nuxt-link
          >

          <nuxt-link
            to="/contact"
            class="
              text-foreground
              block
              px-3
              py-2
              rounded-md
              uppercase
              text-base
              font-medium
            "
            aria-label="open internal link to contact page"
            >Contact</nuxt-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMenu: false,
    };
  },
  watch: {
    $route() {
      this.showMenu = false;
    },
  },
  methods: {
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    closeNav() {
      this.showMenu = false;
    },
  },
};
</script>
