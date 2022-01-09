
<template>
  <div>
    <h4 class="text-center font-weight-bold">Posts</h4>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Content</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <post v-for="(post, index) in posts" :key="index" :post="post"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from './Post.vue';
export default {
  name: "Posts",
  components: {
    Post,
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
  
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

    <style scoped>
