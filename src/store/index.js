import Vue from 'vue';
import Vuex from 'vuex';
import { reviews, guid } from '../data.js';
import { resolve } from 'url';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    reviews: [
      {
        id: '',
        stars: 0,
        text: '',
        createdAt: '',
        user: {
          name: '',
          avatar: '',
        }
      }
    ]
  },
  mutations: {
    addReview(state, review) {
      state.reviews.unshift(review);
    },
    setReviews(state, reviews) {
      state.reviews = reviews;
    }
  },
  actions: {
    loadData({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('setReviews', reviews);
          resolve(reviews)
        }, 2000);
      })
    },
    addReview({ commit }, review) {
      commit('addReview', {
        id: guid(),
        ...review,
      })
    }
  }
});
