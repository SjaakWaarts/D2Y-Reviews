import { getField, updateField } from 'vuex-map-fields';

const state = {
  user: {
    name: '',
    authenticated: false,
  },
};

const getters = {
  getField,
  userAuthenticated: (localState) => {
    return localState.user.authenticated;
  },
  userName: (localState) => {
    return localState.user.name;
  },
};

const actions = {
};

const mutations = {
  updateField,
};

export default {
  // shortcut for state : state,
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
