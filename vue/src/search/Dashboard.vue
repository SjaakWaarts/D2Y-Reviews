<template>
  <div>
    <v-container>
      <v-row v-for="(layout, layoutName) in layouts" :key="layoutName">
        <v-col>
          <v-row v-for="(row, rowIndex) in layout" :key="rowIndex">
            <v-col v-for="(col, colIndex) in row" :key="colIndex">
              <chart :chartName="layout[rowIndex][colIndex]" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';
import Chart from './Chart.vue';

const { mapFields: mapdhkFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'Dashboard',
  components: { Chart },
  directives: { },
  props: [],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
    }),
  },
  computed: {
    ...mapGetters({
    }),
    ...mapdhkFields({
      storyboard: 'storyboard',
      storyboardUI: 'storyboardUI',
    }),
    layouts: function () {
      const layouts = this.storyboard[this.storyboardUI.dashboardSelected.index].layout;
      return layouts;
    },
  },
  watch: {
  },
};
</script>
