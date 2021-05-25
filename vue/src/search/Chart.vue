<template>
  <div>
    <v-card class="pa-2" outlined tile>
      <v-card-title>{{ chart.chart_title }}</v-card-title>
      Chart with name {{ chart.chart_title }}
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { createHelpers } from 'vuex-map-fields';

const { mapFields: mapdhkFields } = createHelpers({
  getterType: 'dhk/getField',
  mutationType: 'dhk/updateField',
});

export default {
  name: 'Chart',
  components: { },
  directives: { },
  props: ['chartName'],
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
      charts: 'charts',
    }),
    chart: function () {
      const chart = this.charts[this.chartName];
      return chart;
    },
  },
  watch: {
  },
};
</script>
