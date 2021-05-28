// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { getField, updateField } from 'vuex-map-fields';

const state = {
  columns: {},
  charts: [],
  facets: {},
  dataTable: {
    headers: [],
    items: [],
    loading: false,
    options: {
      page: 1, itemsPerPage: 30, sortBy: [], sortDesc: [],
    },
    footer: { pagination: { page: 1, results_count: 0 } },
    refreshCount: 0,
  },
  params: {
    workbookName: 'dhk',
    storyboardName: 'initial',
    dashboardName: 'initial',
  },
  q: '',
  recipes: [],
  storyboard: [],
  storyboardUI: {
    dashboardSelected: { index: 0 },
    dashboardOptions: [],
    benchmarks: [],
    tileFacets: [],
    tileValues: [],
  },
  tab: null,
  tiles_d: null,
};

const getters = {
  getField,
  columns: () => state.columns,
  dataTable: () => state.dataTable,
  facets: () => state.facets,
  loading: () => state.dataTable.loading,
  storyboard: () => state.storyboard,
  storyboardUI: () => state.storyboardUI,
};

const actions = {
  searchRecipes({ commit, rootState }) {
    console.log('Getting data');
    const searchCriteria = {
      workbook_name: state.params.workbookName,
      storyboard_name: state.params.storyboardName,
      dashboard_name: state.params.dashboardName,
      s: '-published_date',
    };
    if (state.tab) {
      searchCriteria.tab = state.tab;
    }
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
    localState.storyboard = JSON.parse(data.storyboard);
    localState.charts = JSON.parse(data.dashboard);
    localState.tiles_d = JSON.parse(data.tiles_d);
    // UI Enhancements
    Object.entries(localState.facets).forEach(([facetName, facet]) => {
      facet.options = [];
      for (let ix = 0; ix < facet.values.length; ix++) {
        const option = facet.values[ix];
        const node = { id: option, label: option };
        facet.options.push(node);
      }
    });
    localState.storyboardUI.dashboardOptions = [];
    for (let stix = 0; stix < localState.storyboard.length; stix++) {
      const option = { name: localState.storyboard[stix].name, index: stix };
      if (localState.storyboard[stix].name === localState.params.dashboardName) {
        localState.storyboardUI.dashboardSelected.index = stix;
      }
      localState.storyboardUI.dashboardOptions.push(option);
    }
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
