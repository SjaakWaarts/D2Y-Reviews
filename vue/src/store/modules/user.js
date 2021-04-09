// import axios from 'axios';

const state = {
      user : {
          name : '',
          authenticated : false,
        }
};

const getters = {
    userAuthenticated: (state) => {
      return state.user.authenticated;
    },
    userName: (state) => {
      return state.user.name;
    },
};

const actions = {
};

const mutations = {
};

export default {
  // shortcut for state : state,
  state,
  mutations,
  actions,
  getters
}