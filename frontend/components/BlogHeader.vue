<template>
  <header
    class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-6 text-center"
  >
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
      <p class="text-lg">{{ subtitle }}</p>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "BlogHeader",
  props: {
    title: {
      type: String,
      default: "My Blog",
    },
    subtitle: {
      type: String,
      default: "A collection of thoughts and stories.",
    },
  },
};
</script>
