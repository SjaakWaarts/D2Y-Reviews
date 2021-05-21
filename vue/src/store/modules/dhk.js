// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  columns: {},
  facets: {},
  dataTable: {
    anchors: ['image'],
    headers: [],
    items: [],
    loading: false,
    options: {
      page: 1, itemsPerPage: 30, sortBy: [], sortDesc: [],
    },
    footer: { pagination: { page: 1, results_count: 0 } },
    refreshCount: 0,
  },
  q: '',
  recipes: [],
};

const getters = {
  getField,
  columns: () => state.columns,
  facets: () => state.facets,
  loading: () => state.dataTable.loading,
  dataTable: () => state.dataTable,
};

const actions = {
  searchRecipes({ commit, rootState }) {
    console.log('Getting data');
    const searchCriteria = {
      workbook_name: 'dhk', storyboard_name: 'initial', dashboard_name: 'initial', s: '-published_date',
    };
    searchCriteria.p = state.dataTable.options.page;
    if (state.q.length > 0) {
      searchCriteria.q = state.q;
    }
    Object.values(state.facets).forEach((facet) => {
      if (facet.selected.length) {
        searchCriteria[facet.field] = facet.selected;
      }
    });
    for (let ix = 0; ix < state.dataTable.options.sortBy.length; ix++) {
      const direction = state.dataTable.options.sortDesc[ix] ? '-' : '';
      searchCriteria.s = direction + state.dataTable.options.sortBy[ix];
    }
    state.dataTable.loading = true;
    api.get('/search_workbook', { params: searchCriteria }).then((response) => {
      commit('searchRecipes', response.data);
    });
  },
};

// Mutations expect two arguments: state and payload
const mutations = {
  updateField,
  searchRecipes(localState, data) {
    // const context = JSON.parse(data);
    localState.facets = JSON.parse(data.facets_data);
    const dataTable = JSON.parse(data.data_table);
    localState.dataTable.headers = dataTable.headers;
    localState.dataTable.items = dataTable.items;
    localState.dataTable.footer = dataTable.footer;
    localState.dataTable.footer.showFirstLastPage = true;
    Object.entries(localState.facets).forEach(([facetName, facet]) => {
      facet.options = [];
      for (let ix = 0; ix < facet.values.length; ix++) {
        const option = facet.values[ix];
        const node = { id: option, label: option };
        facet.options.push(node);
      }
    });
    localState.dataTable.loading = false;
    localState.dataTable.refreshCount += 1;
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
