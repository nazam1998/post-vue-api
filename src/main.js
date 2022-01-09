import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import Posts from './components/Posts.vue';
import CreatePost from './components/CreatePost.vue';
import Post from './components/Post.vue';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {
    Posts,
    CreatePost,
    Post
  },
  render: function (h) {
    return h(App)
  }
}).$mount('#app')