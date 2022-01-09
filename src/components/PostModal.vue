<template>
  <div class="post-modal" :id="post.title + post.id" v-on-clickaway="close">
    <div class="post-modal-content">
      <div class="modal-header">
        <h5 class="modal-title" :id="post.title + post.id + 'Label'">
          {{ post.title }}
        </h5>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="title" class="form-label">Post Title</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            v-model="title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Content</label>
          <textarea
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="content"
          ></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="close">
          Close
        </button>
        <button type="button" class="btn btn-primary" @click="update">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  name: "PostModal",
  props: {
    post: Object,
  },
  mixins: [clickaway],
  data() {
    return {
      title: "",
      content: "",
      id: "",
    };
  },
  mounted() {
    this.title = this.post.title;
    this.content = this.post.content;
    this.id = this.post.id;
  },
  methods: {
    update() {
      if (this.title != null && this.content != null) {
        let post = {
          title: this.title,
          content: this.content,
          id: this.id,
        };
        this.$store.dispatch("editPost", post);
        this.$emit("hideModal");
      }
    },
    close() {
      this.title = this.post.title;
      this.content = this.post.content;
      this.$emit("hideModal");
    },
  },
};
</script>
<style>
.post-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.post-modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
</style>
