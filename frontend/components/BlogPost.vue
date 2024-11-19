<template>
  <article
    class="bg-white max-w-4xl p-6 mb-6 mx-auto shadow-md rounded-lg"
    @click="goToDetail"
  >
    <img
      v-if="post.image_url"
      :src="post.image_url"
      alt="Blog post image"
      class="w-full h-64 object-cover rounded-t-lg mb-4"
    />
    <h2 class="text-2xl font-bold mb-2">{{ post.title }}</h2>
    <p class="text-gray-700 mb-4">Published on: {{ formattedDate }}</p>
    <p class="text-gray-700">{{ post.content }}</p>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";

export default Vue.extend({
  name: "BlogPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      return this.post.date
        ? moment(this.post.date).format("MMMM D, YYYY")
        : "";
    },
  },
  methods: {
    goToDetail() {
      this.$router.push(`/blog/${this.post.id}`);
    },
  },
});
</script>
