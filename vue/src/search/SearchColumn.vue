<template>
  <div>
    <div v-if="header.type == 'LinksColumn'">
      <img :src="bind_stream_file_url(item)" alt=field width="128" style="padding-bottom: 4px"><img>
    </div>
    <div v-else-if="header.type == 'NestedColumn' || Array.isArray(item)">
      <ul>
        <li v-for="(elm, index) in item" :key="index"> {{ elm }} </li>
      </ul>
    </div>
    <div v-else-if="header.type == 'JavaScriptColumn'">
    </div>
    <div v-else>
      {{ item }}
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SearchColumn',
  // eslint-disable-next-line vue/no-unused-components
  components: { },
  directives: { },
  props: ['header', 'item'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
    }),
    bind_stream_file_url(location) {
      // const url = '/api/stream_file';
      const url = `${api.defaults.baseURL}/api/stream_file`;
      return encodeURI(`${url}?location=${location}`);
    },
  },
  computed: {
    ...mapGetters({
    }),
  },
  watch: {
  },
};
</script>
