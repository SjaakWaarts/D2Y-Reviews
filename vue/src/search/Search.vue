<template>
  <splitpanes class="default-theme" vertical>
    <pane size="20" min-size="10" max-size="50">
      <span><search-panel /></span>
    </pane>
    <pane min-size="50" max-size="90">
      <span>
        <v-tabs v-model="tab">
          <v-tab key="results">Results</v-tab>
          <v-tab key="summary">Summary</v-tab>
          <v-tab key="storyboard">Storyboard</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item key="results">
            <search-results />
          </v-tab-item>
          <v-tab-item key="summary">
            Summary
          </v-tab-item>
          <v-tab-item key="storyboard">
            <storyboard />
          </v-tab-item>
        </v-tabs-items>

      </span>
    </pane>
  </splitpanes>
</template>

<script>
import { mapActions } from 'vuex';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import SearchPanel from './SearchPanel.vue';
import SearchResults from './SearchResults.vue';
import Storyboard from './Storyboard.vue';

export default {
  components: {
    Splitpanes, Pane, SearchPanel, SearchResults, Storyboard,
  },
  data() {
    return {
      tab: null,
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
    this.searchRecipes();
  },
};
</script>

<style scoped>

.splitpanes__pane {
  padding: 10px;
}

</style>
