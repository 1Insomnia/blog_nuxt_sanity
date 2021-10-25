<template>
  <div class="app-wrapper text-foreground bg-background">
    <TheHeader />
    <main class="main min-h-screen font-sans antialiased">
      <Nuxt keep-alive :keep-alive-props="{ max: 10 }" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "~/components/includes/TheHeader"
import TheFooter from "~/components/includes/TheFooter"

export default {
  components: {
    TheHeader,
    TheFooter,
  },

  layoutTransition: {
    name: "layout",
    mode: "out-in",
  },
}
</script>

<style scoped>
.main {
  padding-top: 80px;
}
</style>
