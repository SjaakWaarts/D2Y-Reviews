// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';

const state = {
  navigation: {
    show: false,
    width: 300,
  },
  facets: [],
  recipes: [],
};

const getters = {
  navigationShow: () => state.navigation.show,
  navigationWidth: () => state.navigation.width,
  facets: () => state.facets,
};

const actions = {
  searchRecipes({ commit }) {
    console.log('Getting data');
    const searchCriteria = {
      workbook_name: 'dhk', storyboard_name: 'initial', dashboard_name: 'initial', s: '-published_date',
    };
    api.get('dhk/search', { params: searchCriteria }).then((response) => {
      console.log(response);
      commit('searchRecipes', response.data);
    });
  },
  toggleNavigationShow({ commit }) {
    commit('toggleNavigationShow');
  },
};

const mutations = {
  searchRecipes(context) {
    state.facets = JSON.parse(context.facets_data);
    Object.values(state.facets).forEach((facet) => {
      facet.options = [];
      for (let ix = 0; ix < facet.values.length; ix++) {
        const option = facet.values[ix];
        const node = { id: option, label: option };
        facet.options.push(node);
      }
    });
  },
  toggleNavigationShow() {
    state.navigation.show = !state.navigation.show;
    return state.navigation.show;
  },
};

export default {
  // shortcut for state : state,
  state,
  mutations,
  actions,
  getters,
};
