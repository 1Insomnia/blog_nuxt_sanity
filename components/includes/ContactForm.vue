<template>
  <form
    class="max-w-xl mx-auto lg:mx-0"
    action="#"
    @submit.prevent="handleSubmit"
  >
    <!-- Form Title -->
    <h2 class="sr-only">Contact Form</h2>

    <!-- Full Name Block -->
    <div class="mb-4">
      <label class="block mb-2 text-foreground-dark lg:mb-4" for="firstName">
        Full Name
      </label>
      <input
        id="fullName"
        class="
          appearance-none
          outline-none
          focus:outline-none
          block
          w-full
          h-12
          px-4
          bg-white
          border border-accent-1
          rounded
          shadow-inset-1
          focus:border-blue
        "
        name="fullName"
        type="text"
        placeholder="What's your fullname ?"
        autofocus
      />
    </div>

    <!-- Email Block -->
    <div class="mb-4">
      <label class="block mb-2 text-foreground-dark lg:mb-4" for="email">
        Email
      </label>
      <input
        id="email"
        class="
          appearance-none
          outline-none
          focus:outline-none
          block
          w-full
          h-12
          px-4
          bg-white
          border border-accent-1
          rounded
          shadow-inset-1
          focus:border-blue
        "
        type="email"
        placeholder="you@example.com"
      />
    </div>

    <!-- Message Block -->
    <div class="mb-8">
      <label class="block text-foreground-dark mb-2 lg:mb-4" for="message">
        Message
      </label>
      <textarea
        id="message"
        class="
          appearance-none
          outline-none
          focus:outline-none
          block
          w-full
          h-12
          pt-4
          px-4
          bg-white
          border border-accent-1
          rounded
          shadow-inset-1
          focus:border-blue
          min-h-120
        "
        placeholder="Your message"
      ></textarea>
    </div>

    <!-- Btn Submit Block -->
    <div>
      <button
        type="submit"
        role="button"
        class="
          inline-block
          py-4
          uppercase
          font-light
          bg-blue
          text-white text-sm
          rounded
          w-full
          border border-blue
          transition
          duration-300
          ease-in
          hover:bg-white hover:text-blue
        "
      >
        Send Message
      </button>
    </div>
    <!-- Btn Submit Block -->
  </form>
</template>

<script>
export default {};
</script>
