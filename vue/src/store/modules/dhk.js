//import axios from "axios";
import api from "@/services/api"

const state = {
      navigation : {
          show: false,
          width: 300,
      },
      recipes : [],
};

const getters = {
    navigationShow: (state) => {
      return state.navigation.show;
    },
    navigationWidth: (state) => {
      return state.navigation.width;
    },
};

const actions = {
    searchRecipes( { commit }) {
      console.log("Getting data");
      let searchCriteria = {workbook_name: 'dhk', storyboard_name: 'initial', dashboard_name: 'initial', s:'-published_date'}
      api.get('search_survey', {params : searchCriteria}).then ((response) => {
        console.log(response);
        commit('searchRecipes', response.data);
      })
    },
    toggleNavigationShow({ commit }) {
      commit('toggleNavigationShow');
    },
};

const mutations = {
    searchRecipes : function (state, context) {
      state.recipes = context.results;
    },
    toggleNavigationShow: function (state) {
      return state.navigation.show = !state.navigation.show;
    }
};

export default {
  // shortcut for state : state,
  state,
  mutations,
  actions,
  getters
}