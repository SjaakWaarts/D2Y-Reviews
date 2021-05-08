<template>
  <div>
    <v-form>
      <v-text-field outlined label="Search" append-icon="mdi-map-marker"></v-text-field>
      <v-card color="grey lighten-4" flat height="80px">
        <v-toolbar>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on" v-on:click="search_filter()"><i class="fas fa-search"></i></v-btn>
            </template>
            <span>Start zoek en filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"><i class="fas fa-undo"></i></v-btn>
            </template>
            <span>Reset zoek en filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"><i class="fas fa-caret-down"></i></v-btn>
            </template>
            <span>Expand all filters</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on"><i class="fas fa-caret-up"></i></v-btn>
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
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="(facet, key) in facetsO" :key="key">
          <v-expansion-panel-header>{{ facet.label }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <facet v-bind:facet="facet" v-model="facet.selected" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { mapMultiRowFields, createHelpers } from 'vuex-map-fields';
import Facet from './Facet.vue';

const { mapMultiRowFields: mapdhkMultiRowFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'SearchPanel',
  components: { Facet },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      searchRecipes: 'dhk/searchRecipes',
    }),
    update_filter(facet, value) {
      facet.selected = value;
    },
    search_filter() {
      this.searchRecipes();
    },
  },
  computed: {
    ...mapGetters({
      facets: 'dhk/facets',
    }),
    ...mapdhkMultiRowFields({
      facetsO: 'facetsO',
      facetsP: 'facetsP',
    }),
  },
};
</script>
