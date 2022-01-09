<template>
  <div>
    <div class="container text-center" v-if="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <button class="btn btn-danger" @click="deletePost(post)">
        <i style="color: white" class="fa fa-trash"></i>
      </button>
      <button type="button" class="btn btn-warning" @click="setModal">
        <i style="color: white" class="fa fa-pen"></i>
      </button>
    </div>
      <post-modal :post="post" v-if="showModal" @hideModal="setModal" />
  </div>
</template>
<script>
import axios from "axios";
import PostModal from "@/components/PostModal";
export default {
  name: "ThePost",
  props: {
    id: {
      required: true,
    },
  },
  components: {
    PostModal,
  },
  data() {
    return {
      post: null,
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
  mounted() {
    axios.get("http://127.0.0.1:8000/api/post/" + this.id).then((response) => {
      this.post = response.data;
    });
  },
};
</script>
<style>
</style>
