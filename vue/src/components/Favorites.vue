<template>
  <v-card class="mx-auto">
    <v-row>
      <v-col v-for="(item, i) in candidates" :key="i" cols="10" style="margin: 2%">
        <v-card  light>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.name"></v-card-title>
              <v-card-subtitle style="color:black">Votes: {{ item.votes }}</v-card-subtitle>
              <v-card-subtitle>
                <v-expansion-panels v-model="panel">
                  <v-expansion-panel>
                    <v-expansion-panel-header>Details</v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <b>Number of Challenges Solved:</b> {{ item.no_challenges_solved }}
                      <br />
                      <b>Python Rating:</b> {{ item.python_rating }}
                      <br />
                      <b>DSA Rating:</b> {{ item.dsa_rating }}
                      <br />
                      <b>Java Rating:</b> {{ item.java_rating }}
                      <br />
                      <b>C++ Rating:</b> {{ item.cplus_rating }}
                      <br />
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-card-subtitle>
              <v-card-actions>
                <v-btn class="btn-success" style="color:white" text v-on:click="vote(item)">Vote</v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      candidates: [],
      panel: null,
    };
  },
  created() {
    console.log("Here");
    this.all();
  },
  methods: {
    vote: function (candidate) {
      if (confirm("Vote " + candidate.name)) {
        let url = 'http://' + process.env.VUE_APP_HOST + ':' + process.env.VUE_APP_PORT + '/api/vote/'
        axios
          .post(url, {
            candidate_name: candidate.name,
          })
          .then((response) => {
            console.log(response);
            alert("Voted for" + candidate.name)
            this.all()
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error);
              alert("You are only allowed to vote once");
            }
          });
      }
    },
    all: function () {
      console.log("Getting data");
      let url = 'http://' + process.env.VUE_APP_HOST + ':' + process.env.VUE_APP_PORT + '/api/candidate/'
      axios.get(url, {
        auth: {
          username: "sjaak",
          password: "test"
        }
      }).then((response) => {
        this.candidates = response.data;
        console.log(response);
      });
    },
  },
};
</script>