<script>
// eslint-disable-next-line import/no-unresolved
import api from '@/services/api';
import { mapActions, mapGetters } from 'vuex';
import LinkColumn from './LinkColumn.vue';

export default {
  name: 'SearchColumn',
  // eslint-disable-next-line vue/no-unused-components
  components: { LinkColumn },
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
  render(h) {
    if (this.header.type === 'LinksColumn') {
      const src = this.bind_stream_file_url(this.item);
      return h('img', {
        domProps: {
          src: src, alt: 'field', width: '128', style: 'padding-bottom: 4px',
        },
      });
    }
    if (this.header.type === 'NestedColumn' || Array.isArray(this.item)) {
      return h('ul', this.item.map((elm) => h('li', elm)));
    }
    if (this.header.type === 'JavaScriptColumn') {
      return h('JavaScriptColumn');
    }
    if (this.header.value === 'score') {
      return h('v-progress-linear', {
        props: { value: this.item, height: 15 },
      });
    }
    if (this.header.urls) {
      return h('link-column', {
        props: { header: this.header, item: this.item },
      });
    }
    return h('p', this.item);
  },
  watch: {
  },
};
</script>
