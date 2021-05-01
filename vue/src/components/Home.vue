<template>
  <v-sheet class="pa-6" color="grey lighten-3">
    <v-sheet rounded="xl">
      <div class="pa-3">
          <h3>
              Op zoek naar een recept, of schuif je liever aan bij iemand die voor je kookt!
          </h3>
          <p>
              Beide is mogelijk op deze site. Ga <b>opzoek</b> waar je zin in hebt via het uitgebruide zoek scherm.
              Eenmaal gevonden, dan staan de verschillende gangen van de maaltijd overzichtelijk naast elkaar.
              Het recept dat bij iedere gang hoort staat opgesomt middels de benodigde ingrediënten en de stappen voor de bereidingswijze.
          </p>
          <p>
              Geen zin om zelf te koken, meld je dan aan bij de <b>Kookclub</b> die voor deze maaltijd wordt georganiseerd en schuif aan.
              Of, juist wel zin om te koken maar niet alleen. Organiseer dan zelf een Kookclub, nodig mensen uit of wacht wie er zich inschrijft.
          </p>
      </div>
    </v-sheet>

    <v-container fluid>
      <v-row dense>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('/public/media/search_supermarket.jpg')" height="200px"></v-img>
            <v-card-title>
              Recepten
            </v-card-title>
            <v-card-subtitle>
              Ga <b>opzoek</b>!
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'search' }">
                Ga <b>opzoek</b> Recept<span class="glyphicon glyphicon-floppy-open" aria-hidden="true"></span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Ga <b>opzoek</b> naar de maaltijd waar je zin in hebt via het uitgebruide zoek scherm.
                  Kook zelf of schuif aan bij de <b>Kookclub</b>.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('/public/media/club_dining_table.jpg')" height="200px"></v-img>
            <v-card-title>
              Kookclub
            </v-card-title>
            <v-card-subtitle>
              Schuif aan!
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'club' }">
                Schuif aan <b>Kookclub</b> <span class="glyphicon glyphicon-floppy-open" aria-hidden="true"></span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Geen zin om zelf te koken, meld je dan aan bij een Kookclub en schuif aan. Hier een overzicht van alle <b>Kookclubs</b>.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('/public/media/workshop_cooks.jpg')" height="200px"></v-img>
            <v-card-title>
              Workshops
            </v-card-title>
            <v-card-subtitle>
              Meld je aan!
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'workshops' }">
                Volg <b>Workshop</b> <span class="glyphicon glyphicon-floppy-open" aria-hidden="true"></span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Een overzicht van alle workshops. Is er iets voor je bij, meld je aan.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img :src="require('/public/media/mykitchen_baker.jpg')" height="200px"></v-img>
            <v-card-title>
              Mijn Keuken
            </v-card-title>
            <v-card-subtitle>
              Organiseer!
            </v-card-subtitle>
            <v-card-actions>
              <v-btn color="orange lighten-2" text :to="{ name: 'dhk_admin' }">
                My Heerlijke Keuken <span class="glyphicon glyphicon-floppy-open" aria-hidden="true"></span>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  Vind je het leuk om zelf te koken en met anderen te delen, dat kan hier!
                  Laad je eigen recepten en organiseer eigen workshops (Login vereist).
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
  },
  methods: {
  },
};
</script>
