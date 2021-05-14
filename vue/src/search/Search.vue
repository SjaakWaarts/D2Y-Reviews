<template>
  <splitpanes class="default-theme" vertical>
    <pane size="20" min-size="10" max-size="50">
      <span><search-panel /></span>
    </pane>
    <pane min-size="50" max-size="90">
      <span><search-results /></span>
    </pane>
  </splitpanes>
</template>

<script>
import { mapActions } from 'vuex';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import SearchPanel from './SearchPanel.vue';
import SearchResults from './SearchResults.vue';

export default {
  components: {
    Splitpanes, Pane, SearchPanel, SearchResults,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ...mapActions({
      searchRecipes: 'dhk/searchRecipes',
    }),
  },
  created() {
    // Content data table requested by dataTableUpdate
    // this.searchRecipes();
  },
};
</script>
