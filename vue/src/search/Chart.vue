<template>
  <div>
    <v-card class="pa-2" outlined tile>
      <v-card-title>{{ chart.chart_title }}</v-card-title>
        <GChart
          :type=chart.chart_type
          :settings="{ packages: ['corechart', 'controls'] }"
          :data="chartData" :options="chartOptions"/>
    </v-card>
  </div>
</template>

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
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
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
