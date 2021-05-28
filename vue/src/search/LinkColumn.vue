<template>
  <div class="text-center">
    <v-menu open-on-hover top offset-y>
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on" href="javascript:void(0);">
          {{ item }}
        </a>
      </template>
      <v-list>
        <v-list-item v-for="(a, href) in header.urls" :key="a">
          <v-list-item-title> {{ bindAnchor(a, href, header, item).anchor }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>

export default {
  name: 'LinkColumn',
  components: { },
  directives: { },
  props: ['header', 'item'],
  data() {
    return {
    };
  },
  methods: {
    bindAnchor(a, href, header, item) {
      const anchor = a === header.value ? item : a;
      const link = href === header.value ? item : href;
      return { anchor, link };
    },
  },
  computed: {
  },
  watch: {
  },
};
</script>
