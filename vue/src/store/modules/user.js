// import axios from 'axios';

const state = {
  user: {
    name: '',
    authenticated: false,
  },
};

const getters = {
  userAuthenticated: () => {
    return state.user.authenticated;
  },
  userName: () => {
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
  getters,
};
