<template>
  <div>
    <v-card class="pa-2" outlined tile>
      <v-app-bar flat color="indigo" dense>
        <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
        <v-toolbar-title class="title white--text pl-0">
          {{ chart.chart_title }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon color="white" v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-subheader>Chart</v-subheader>
              <v-list-item @click="() => {}">Configure</v-list-item>
              <v-list-item @click="() => {}">Learn</v-list-item>
              <v-list-item @click="() => {}">Print</v-list-item>
              <v-list-item @click="() => {}">Download</v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <!--Div that will hold the dashboard-->
      <div :id="chartName + '_dbdiv'">
        <!--Divs that will hold each control and chart-->
        <div :id="chartName + '_ct1div'"></div>
        <div :id="chartName + '_ct2div'"></div>
        <div :id="chartName + '_chdiv'">
          <GChart
            :type=chart.chart_type
            :settings="{ packages: ['corechart', 'controls'] }"
            :data="chartData" :options="chartOptions"/>
            </div>
      </div>
    </v-card>
  </div>
</template>

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';
import { GChart } from 'vue-google-charts';

const { mapFields: mapdhkFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'Chart',
  components: { GChart },
  directives: { },
  props: ['chartName'],
  data() {
    return {
      chartOptions: {
        title: 'Company Performance',
        subtitle: 'Sales, Expenses, and Profit: 2014-2017',
      },
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
      charts: 'charts',
      tiles_d: 'tiles_d',
    }),
    chart: function () {
      const chart = this.charts[this.chartName];
      return chart;
    },
    chartData: function () {
      const tile = this.tiles_d[this.chartName];
      const tileAll = tile.All;
      const chartData = tileAll.chart_data;
      return chartData;
    },
  },
  watch: {
  },
};
</script>
