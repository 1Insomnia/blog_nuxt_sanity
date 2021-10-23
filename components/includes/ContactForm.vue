<template>
  <form action="#" class="px-10">
    <!-- Form Title -->
    <h2 class="heading-4 mb-8">Send me a message</h2>
    <!-- Form Title -->

    <!-- First Name Block -->
    <div class="mb-4">
      <label
        class="block mb-2 text-foreground-dark font-semibold lg:mb-4"
        for="firstName"
      >
        First name
      </label>

      <span class="block text-sm text-mat-red mb-2"> {{ errors[0] }}</span>
      <input
        name="firstName"
        class="
          outline-none
          block
          w-full
          py-3
          px-2
          bg-mat-grey-light
          border-b-2 border-mat-grey
          focus:border-mat-blue-grey
        "
        :class="{ 'border-mat-red': errors }"
        type="text"
        id="firstName"
        v-model="emailInfos.firstName"
        autofocus
      />
    </div>
    <!-- First Name Block -->

    <!-- Last Name Block -->
    <div class="mb-4">
      <label
        class="block text-foreground-dark font-semibold lg:mb-4"
        for="lastName"
      >
        Last name
      </label>
      <span class="block text-sm text-mat-red mb-2"> {{ errors[0] }}</span>
      <input
        class="
          outline-none
          block
          w-full
          py-3
          px-2
          bg-mat-grey-light
          border-b-2 border-mat-grey
          focus:border-mat-blue-grey
        "
        type="text"
        id="lastName"
        v-model="emailInfos.lastName"
      />
    </div>
    <!-- Last Name Block -->

    <!-- Email Block -->
    <div class="mb-4">
      <label
        class="mb-2 block text-foreground-dark font-semibold lg:mb-4"
        for="email"
      >
        Email
      </label>
      <span class="block text-sm text-mat-red mb-2"> {{ errors[0] }}</span>
      <input
        class="
          outline-none
          block
          w-full
          py-3
          px-2
          bg-mat-grey-light
          border-b-2 border-mat-grey
          focus:border-mat-blue-grey
        "
        type="email"
        id="email"
        v-model="emailInfos.email"
      />
    </div>
    <!-- Email Block -->

    <!-- Message Block -->
    <div class="mb-8">
      <label
        class="block text-foreground-dark font-semibold mb-2 lg:mb-4"
        for="message"
      >
        Message
      </label>
      <span class="block text-sm text-mat-red mb-2"> {{ errors[0] }}</span>
      <textarea
        class="
          outline-none
          block
          w-full
          py-3
          px-2
          bg-mat-grey-light
          border-b-2 border-mat-grey
          focus:border-mat-blue-grey
        "
        id="message"
        cols="30"
        rows="5"
      ></textarea>
    </div>
    <!-- Message Block -->

    <!-- Btn Submit Block -->
    <div>
      <button
        type="submit"
        role="button"
        class="
          inline-block
          px-6
          py-3
          uppercase
          font-light
          bg-mat-blue-grey
          text-white text-sm
          rounded
        "
      >
        Send Message
      </button>
    </div>
    <!-- Btn Submit Block -->
  </form>
</template>

<script>
export default {}
</script>
