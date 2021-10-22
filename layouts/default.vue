<template>
  <div class='app-wrapper text-foreground bg-background'>
    <TheHeader />
    <main class='main min-h-screen font-sans antialiased'>
      <Nuxt keep-alive :keep-alive-props='{ max: 10 }' />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/includes/TheHeader'
import TheFooter from '~/components/includes/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.main {
  padding-top: 62px;
}

@media screen and (min-width: 1024px) {
  .main {
    padding-top: 88px;
  }
}
</style>
