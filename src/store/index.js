import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: []
    },
    mutations: {
        CREATE_POST(state, post) {
            state.posts.unshift(post)
        },
        FETCH_POSTS(state, posts) {
            return state.posts = posts
        },
        DELETE_POST(state, post) {
            let index = state.posts.findIndex(item => item.id === post.id)
            state.posts.splice(index, 1)
        }
    },
    getters: {
        posts: state => {
            return state.posts
        }
    },
    actions: {
        createPost({
            commit
        }, post) {
            axios.post('http://127.0.0.1:8000/api/posts', post)
                .then(res => {
                    commit('CREATE_POST', res.data)
                }).catch(err => {
                    console.log(err)
                })

        },
        fetchPosts({
            commit
        }) {
            axios.get('http://127.0.0.1:8000/api/posts')
                .then(res => {
                    commit('FETCH_POSTS', res.data)
                }).catch(err => {
                    console.log(err)
                })
        },

        editPost({
            commit,
            dispatch
        }, post) {
            axios.put(`http://127.0.0.1:8000/api/posts/${post.id}`, post)
                .then(res => {
                    if (res.data === 'ok') {
                        dispatch('fetchPosts');
                    }

                }).catch(err => {
                    console.log(err)
                })
        },
        deletePost({
            commit
        }, post) {
            axios.delete(`http://127.0.0.1:8000/api/posts/${post.id}`)
                .then(res => {
                    if (res.data === 'ok')
                        commit('DELETE_POST', post)
                }).catch(err => {
                    console.log(err)
                })
        }
    }
})