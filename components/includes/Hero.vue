<template>
  <section id="hero">
    <div
      class="
        bg-hero-pattern
        min-h-screen-full
        text-white
        bg-cover bg-center bg-no-repeat
        flex
        items-center
        justify-center
      "
    >
      <div class="text-center flex flex-col items-center">
        <h1 class="inktrap">Nuxt Travel</h1>
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, eum?
        </p>
        <nuxt-link class="btn z-0" to="#articles">
          <span class="btn-text">Explore</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="btn-icon h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
}
</script>

<style scoped>
.btn {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  background: #fff;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid #fff;
  transition: all 375ms;
  font-size: 14px;
  opacity: 0.95;
}
</style>
