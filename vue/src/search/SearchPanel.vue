<template>
  <div>
    <v-form v-on:submit="search_filter()">
      <v-text-field v-model="q" outlined label="Search"></v-text-field>
      <v-card color="grey lighten-4" flat height="80px">
        <v-toolbar>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" icon v-bind="attrs" v-on="on" v-on:click="searchFilters()"><i class="fas fa-search"></i></v-btn>
            </template>
            <span>Start zoek en filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" v-on:click="resetFilters()"><i class="fas fa-undo"></i></v-btn>
            </template>
            <span>Reset zoek en filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" v-on:click="expandPanels()"><i class="fas fa-caret-down"></i></v-btn>
            </template>
            <span>Expand all filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" v-on:click="collapsPanels()"><i class="fas fa-caret-up"></i></v-btn>
            </template>
            <span>Collapse all filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"><i class="fas fa-file-export"></i></v-btn>
            </template>
            <span>Export resultaten naar file</span>
          </v-tooltip>
        </v-toolbar>
      </v-card>
      <v-expansion-panels multiple v-model=panelsExpanded>
        <v-expansion-panel >
          <v-expansion-panel-header>Filters</v-expansion-panel-header>
          <v-expansion-panel-content>
            <facet v-for="(facet, key) in visibleFacets('TermsFacet')" :key="key"
              v-bind:facet="facet" v-model="facet.selected" class="mb-2"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel >
          <v-expansion-panel-header>Datum</v-expansion-panel-header>
          <v-expansion-panel-content>
            <facet v-for="(facet, key) in visibleFacets('RangeFacet')" :key="key"
              v-bind:facet="facet" v-model="facet.selected" class="mb-2"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel >
          <v-expansion-panel-header>Keywords</v-expansion-panel-header>
          <v-expansion-panel-content>
            <facet v-for="(facet, key) in visibleFacets('KeywordFacet')" :key="key"
              v-bind:facet="facet" v-model="facet.selected" v-on:change="changeKeywordFacet($event, facet)" class="mb-2"/>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';
import Facet from './Facet.vue';

const { mapFields: mapdhkFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

const { mapMultiRowFields: mapdhkMultiRowFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'SearchPanel',
  components: { Facet },
  data() {
    return {
      panelsExpanded: [0],
    };
  },
  methods: {
    ...mapActions({
      searchRecipes: 'dhk/searchRecipes',
    }),
    changeKeywordFacet(value, facet) {
      facet.keywords_text = value;
    },
    collapsPanels() {
      this.panelsExpanded = [];
    },
    expandPanels() {
      this.panelsExpanded = [0, 1, 2];
    },
    resetFilters() {
      this.q = '';
      for (let ix = 0; ix < this.facets.length; ix++) {
        this.facets[ix].selected = [];
        if ('keywords_text' in this.facets[ix]) {
          this.facets[ix].keywords_text = '';
        }
      }
    },
    searchFilters() {
      this.searchRecipes();
    },
    visibleFacets(facetType) {
      return this.facets.filter((facet) => {
        return facet.type === facetType && facet.visible_pos > 0;
      });
    },
  },
  computed: {
    ...mapGetters({
    }),
    ...mapdhkFields({
      q: 'q',
    }),
    ...mapdhkMultiRowFields({
      facets: 'facets',
    }),
  },
};
</script>
