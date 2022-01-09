<template>
  <tr>
    <td>{{ post.title }}</td>
    <td>{{ post.content }}</td>
    <td>
      <button class="btn btn-danger" @click="deletePost(post)">
        <i style="color: white" class="fa fa-trash"></i>
      </button>
      <button type="button" class="btn btn-warning" @click="setModal">
        <i style="color: white" class="fa fa-pen"></i>
      </button>
      <router-link :to="{ name: 'Post', params: { id: post.id } }"
        >View</router-link
      >
    </td>
    <post-modal :post="post" v-if="showModal" @hideModal="setModal" />
  </tr>
</template>
<script>
import PostModal from "./PostModal.vue";
export default {
  name: "Post",
  components: {
    PostModal,
  },
  props: {
    post: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    deletePost(post) {
      this.$store.dispatch("deletePost", post);
    },
    setModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
<style>
</style>
