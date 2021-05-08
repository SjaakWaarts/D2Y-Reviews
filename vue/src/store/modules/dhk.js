// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  show: false,
  navigation: {
    show: false,
    width: 300,
  },
  facets: {},
  facetsO: {},
  facetsP: { categories: { label: 'P1', selected: [] }, tags: { label: 'P2', selected: [] } },
  recipes: [],
};

const getters = {
  getField,
  facets: () => state.facets,
  navigationShow: (localState) => localState.navigation.show,
  navigationWidth: (localState) => localState.navigation.width,
};

const actions = {
  searchRecipes({ commit, rootState }) {
    console.log('Getting data');
    const searchCriteria = {
      workbook_name: 'dhk', storyboard_name: 'initial', dashboard_name: 'initial', s: '-published_date',
    };
    Object.values(state.facetsO).forEach((facet) => {
      if (facet.selected.length) {
        searchCriteria[facet.label] = facet.selected;
      }
    });
    api.get('/search_workbook', { params: searchCriteria }).then((response) => {
      commit('searchRecipes', response.data);
    });
  },
  toggleNavigationShow({ commit, rootState }) {
    commit('toggleNavigationShow');
  },
};

// Mutations expect two arguments: state and payload
const mutations = {
  updateField,
  searchRecipes(localState, data) {
    // const context = JSON.parse(data);
    localState.facets = JSON.parse(data.facets_data);
    Object.entries(localState.facets).forEach(([facetName, facet]) => {
      facet.options = [];
      for (let ix = 0; ix < facet.values.length; ix++) {
        const option = facet.values[ix];
        const node = { id: option, label: option };
        facet.options.push(node);
      }
    });
    localState.facetsO = JSON.parse(data.facets_data);
    Object.entries(localState.facetsO).forEach(([facetName, facet]) => {
      facet.options = [];
      for (let ix = 0; ix < facet.values.length; ix++) {
        const option = facet.values[ix];
        const node = { id: option, label: option };
        facet.options.push(node);
      }
    });
  },
  toggleNavigationShow(localState) {
    localState.navigation.show = !localState.navigation.show;
    return localState.navigation.show;
  },
};

export default {
  // shortcut for state : state,
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
