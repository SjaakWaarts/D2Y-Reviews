<template>
  <div v-if="facet.type == 'KeywordFacet'">
    <v-text-field v-bind:value="facet.keywords_text" outlined v-bind:label="facet.label" v-on:change="changeKeywordFacet"></v-text-field>
    <treeselect v-bind:instance-id="facet.label" class="mr-1" :multiple="true"
                v-bind:options="facet.options"
                v-bind:value="value"
                v-on:input="facet_terms_input_change"
                :placeholder="'Selecteer '+facet.label+' ...'" />
  </div>
  <div v-else>
    <treeselect v-bind:instance-id="facet.label" class="mr-1" :multiple="true"
                v-bind:options="facet.options"
                v-bind:value="value"
                v-on:input="facet_terms_input_change"
                :placeholder="'Selecteer '+facet.label+' ...'" />
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  name: 'Facet',
  components: { Treeselect },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: ['facet', 'value'],
  data() {
    return {
    };
  },
  methods: {
    changeKeywordFacet(value, instanceId) {
      this.$emit('change', value);
    },
    facet_terms_input_change(value, instanceId) {
      // [Vue tip]: Prop "instanceid" is passed to component <Anonymous>, but the declared prop name is "instanceId".
      // Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates.
      // You should probably use "instance-id" instead of "instanceId".
      this.$emit('input', value);
    },
  },
};
</script>
