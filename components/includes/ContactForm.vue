<template>
  <form>
    <div class="mb-4">
      <label
        class="block mb-2 text-foreground-dark font-semibold lg:mb-4"
        for="firstName"
        >First name</label
      >
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
        id="firstName"
      />
    </div>
    <div class="mb-4">
      <label
        class="block text-foreground-dark font-semibold lg:mb-4"
        for="lastName"
        >Last name</label
      >
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
      />
    </div>
    <div class="mb-4">
      <label
        class="mb-2 block text-foreground-dark font-semibold lg:mb-4"
        for="email"
        >Last name</label
      >
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
      />
    </div>
    <div class="mb-8">
      <label
        class="block text-foreground-dark font-semibold mb-2 lg:mb-4"
        for="message"
        >Message</label
      >
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
  </form>
</template>

<script>
export default {}
</script>
