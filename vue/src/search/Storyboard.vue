<template>
  <div>
    <v-container>
      <v-row justify="start">
        <v-col>
          <v-select label="Dashboard" :items="storyboardUI.dashboardOptions" item-text="name" item-value="index"
            v-model="storyboardUI.dashboardSelected" @change="dashboardSelectChange">
          </v-select>
        </v-col>
        <v-col>
          <v-select label="Benchmark" :items="storyboardUI.benchmakrs"></v-select>
        </v-col>
        <v-col>
          <v-select label="Tile-Facet" :items="storyboardUI.tileFacets"></v-select>
        </v-col>
        <v-col>
          <v-select label="Tile-Value" :items="storyboardUI.tileValues"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <dashboard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';
import Dashboard from './Dashboard.vue';

const { mapFields: mapdhkFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'Storyboard',
  components: { Dashboard },
  directives: { },
  props: [],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
    }),
    dashboardSelectChange() {
      console.log(this.params.dashboardName);
    },
  },
  computed: {
    ...mapGetters({
    }),
    ...mapdhkFields({
      storyboardUI: 'storyboardUI',
    }),
  },
  watch: {
  },
};
</script>
