<template>
  <div
    class="min-h-screen mx-auto py-8 px-4 bg-gradient-to-r from-indigo-500 to-cyan-500"
  >
    <article
      class="bg-white p-6 shadow-md rounded-lg max-w-5xl mx-auto min-h-screen"
    >
      <img
        v-if="blogPost?.image_url"
        :src="blogPost?.image_url"
        alt="Blog post image"
        class="w-full h-96 object-cover max-w-5xl mx-auto rounded-t-lg mb-4"
      />
      <div class="mx-auto">
        <h2 class="text-2xl font-bold mb-2">{{ blogPost?.title }}</h2>
        <p class="text-gray-700 mb-4">Published on: {{ formattedDate }}</p>
        <p class="text-gray-700">{{ blogPost?.content }}</p>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import { BlogPost } from "../../types/blog-post";

export default Vue.extend({
  name: "BlogDetail",
  data() {
    return {
      blogPost: null as BlogPost | null,
    };
  },
  computed: {
    formattedDate(): string {
      return this.blogPost?.date
        ? moment(this.blogPost.date).format("MMMM D, YYYY")
        : "";
    },
  },
  async mounted() {
    const postId = this.$route.params.id;
    const response = await this.$axios.get(`/blog/post/${postId}`);
    this.blogPost = response.data;
  },
});
</script>
