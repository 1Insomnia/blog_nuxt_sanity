<template>
  <header id="header">
    <div
      class="overlay"
      :class="{ hidden: !showMenu, block: showMenu }"
      @click="closeNavbar"
    ></div>
    <nav
      class="
        fixed
        z-50
        w-full
        bg-background
        top-0
        flex flex-wrap
        items-center
        justify-between
        py-3
        shadow-lg
      "
      id="navbar"
    >
      <div class="container flex flex-wrap items-center justify-between">
        <div
          class="
            w-full
            relative
            flex
            justify-between
            lg:w-auto lg:static lg:block lg:justify-start
          "
        >
          <!-- Brand Logo -->
          <nuxt-link
            class="
              text-sm
              font-bold
              leading-relaxed
              inline-block
              mr-4
              py-2
              foregroundspace-nowrap
              uppercase
              text-foreground
            "
            to="/"
          >
            Nux <span class="text-success">Blog</span>
          </nuxt-link>
          <!-- Nav Toggle -->
          <button
            class="
              cursor-pointer
              text-xl
              leading-none
              px-4
              py-1
              border border-solid border-transparent
              rounded
              bg-transparent
              block
              lg:hidden
              outline-none
              focus:outline-none
              transform
              transition
              duration-300
              ease-linear
              text-success
            "
            :class="{ 'rotate-180': !showMenu }"
            type="button"
            @click="toggleNavbar()"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              shape-rendering="geometricPrecision"
              class="w-6 h-6"
            >
              <path
                d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Nav List Wrapper -->
        <div
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="transform lg:flex lg:flex-grow items-center"
        >
          <!-- Nav List -->
          <ul class="py-4 flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <nuxt-link
                class="
                  px-4
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-foreground
                  hover:opacity-75
                "
                to="/"
              >
                Home
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="
                  px-4
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-foreground
                  hover:opacity-75
                "
                to="/blog"
              >
                Blog
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="
                  px-4
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-foreground
                  hover:opacity-75
                "
                to="/about"
              >
                About
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                class="
                  px-4
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-foreground
                  hover:opacity-75
                "
                to="/contact"
              >
                Contact
              </nuxt-link>
            </li>
          </ul>
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
    }
  },
  watch: {
    $route() {
      this.showMenu = false
    },
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu
    },
    closeNavbar() {
      this.showMenu = false
    },
  },
}
</script>
<style scoped>
.overlay {
  position: fixed;
  height: 100vh;
  width: 100%;

  z-index: 40;

  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
}
</style>
