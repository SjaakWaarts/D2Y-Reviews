<template>
  <div>
    <v-data-table :headers="dataTable.headers" :items="dataTable.items" :footer-props="dataTable.footer"
      v-columns-resizable :key="dataTable.refreshCount"
      class="elevation-1 table-striped"
      :options.sync="dataTable.options"
      :server-items-length="dataTable.footer.pagination.itemsLength"
      :loading="dataTable.loading"
      loading-text="Loading... Please wait"
      v-on:update:page="dataTableUpdate" v-on:update:sort-by="dataTableUpdate" v-on:update:sort-desc="dataTableUpdate">
    <template v-for="(header, index) in dataTable.headers" v-slot:[`item.${header.value}`]="{ item }">
      <div :key="index">
        <search-column v-bind:header="header" v-bind:item="item[header.value]" />
      </div>
    </template>
    </v-data-table>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { mapActions, mapGetters } from 'vuex';
import SearchColumn from './SearchColumn.vue';

export default {
  name: 'SearchResults',
  // eslint-disable-next-line vue/no-unused-components
  components: { SearchColumn },
  directives: { },
  props: [],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      searchRecipes: 'dhk/searchRecipes',
    }),
    bind_stream_file_url(location) {
      // const url = '/api/stream_file';
      const url = `${api.defaults.baseURL}/api/stream_file`;
      return encodeURI(`${url}?location=${location}`);
    },
    dataTableUpdate(value) {
      this.searchRecipes();
    },
  },
  computed: {
    ...mapGetters({
      columns: 'dhk/columns',
      dataTable: 'dhk/dataTable',
    }),
  },
  watch: {
  },
};
</script>
