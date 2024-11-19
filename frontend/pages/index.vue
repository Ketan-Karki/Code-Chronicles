<template>
  <div class="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400">
    <BlogHeader
      title="Ketan's Code Chronicles"
      subtitle="A collection of thoughts and stories."
    />
    <main class="container mx-auto py-8 px-4">
      <BlogPost v-for="(post, index) in blogPosts" :key="index" :post="post" />
    </main>
    <footer
      class="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white py-4 text-center"
    >
      <p>© 2024 Ketan's Code Chronicles. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogPost from "../components/BlogPost.vue";
import BlogHeader from "../components/BlogHeader.vue";
import { BlogPost as BlogPostInterface } from "../types/blog-post";

export default Vue.extend({
  components: {
    BlogHeader,
    BlogPost,
  },
  data() {
    return {
      blogPosts: [] as BlogPostInterface[],
    };
  },
  mounted() {
    this.$nextTick(async () => {
      const response = await this.$axios.get("/blog/posts");
      this.blogPosts = response.data;
    });
  },
});
</script>
