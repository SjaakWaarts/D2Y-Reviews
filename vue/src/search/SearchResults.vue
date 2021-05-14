<template>
  <div>
    <v-data-table :headers="dataTable.headers" :items="dataTable.items"
    class="elevation-1"
    :items-per-page="20"
    :options.sync="dataTable.options"
    :server-items-length="dataTable.footer.pagination.results_count"
    :loading="dataTable.loading"
    loading-text="Loading... Please wait"
    v-on:update:options="dataTableUpdate">
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchResults',
  components: { },
  props: [],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      searchRecipes: 'dhk/searchRecipes',
    }),
    dataTableUpdate(value) {
      this.searchRecipes();
    },
  },
  computed: {
    ...mapGetters({
      columns: 'dhk/columns',
      dataTable: 'dhk/dataTable',
      loading: 'dhk/dataTable.loading',
    }),
  },
  watch: {
  },
};
</script>
