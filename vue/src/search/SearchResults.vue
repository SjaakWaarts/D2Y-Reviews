<template>
  <div>
    <v-data-table :headers="dataTable.headers" :items="dataTable.items" :footer-props="dataTable.footer"
      v-columns-resizable :key="dataTable.refreshCount"
      class="elevation-1"
      :options.sync="dataTable.options"
      :server-items-length="dataTable.footer.pagination.itemsLength"
      :loading="dataTable.loading"
      loading-text="Loading... Please wait"
      v-on:update:page="dataTableUpdate">
    <template v-for="(anchor, index) in dataTable.anchors" v-slot:[`item.${anchor}`]="{ item }">
      <div :key="index">
        <img :src="bind_stream_file_url(item[anchor])" alt=field width="128"><img>
      </div>
    </template>
    </v-data-table>
    <h2>Data Table</h2>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      v-columns-resizable
      class="elevation-1">
    </v-data-table>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchResults',
  // eslint-disable-next-line vue/no-unused-components
  components: { },
  directives: { },
  props: [],
  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
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
