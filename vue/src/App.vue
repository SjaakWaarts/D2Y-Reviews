<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dense dark>
      <v-app-bar-nav-icon @click="toggle"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-2">de (H)eerlijke Keuken</v-toolbar-title>
      <v-btn depressed color="indigo" :to="{ name: 'home' }"><v-icon class="mr-2">fas fa-home</v-icon>Home</v-btn>
      <v-btn depressed color="indigo" :to="{ name: 'search' }"><v-icon class="mr-2">fas fa-utensils</v-icon>Ga opzoek</v-btn>
      <v-btn depressed color="indigo" :to="{ name: 'club' }"><v-icon class="mr-2">fas fa-users</v-icon>Kookclub</v-btn>
      <v-btn depressed color="indigo" :to="{ name: 'workshops' }"><v-icon class="mr-2">fas fa-mitten</v-icon>Workshops</v-btn>            
      <v-spacer></v-spacer>
      <div v-if="userAuthenticated">
        <v-btn depressed color="indigo"><v-icon class="mr-2">far fa-id-card</v-icon>{{ userName }}</v-btn> 
        <v-btn depressed color="indigo"><v-icon class="mr-2">fas fa-sign-in-alt</v-icon>Log out</v-btn> 
      </div>
      <div v-else>
        <v-btn depressed color="indigo"><v-icon class="mr-2">far fa-id-card</v-icon>Registreer</v-btn> 
        <v-btn depressed color="indigo"><v-icon class="mr-2">fas fa-sign-in-alt</v-icon>Log in</v-btn>
      </div>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer :permanent="navigationShow" :width="navigationWidth" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-star-shooting</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/favorites">Favorieten</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/register">Register New Candidate<br> (Only Admins)</router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
    
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    props: {
      source: String,
    },
    data: () => ({
    }),
    methods: {
      toggle() {
        this.$store.dispatch('toggleNavigationShow')
      },
    },
    computed: {
      ...mapGetters([
        'navigationShow',
        'navigationWidth',
        'userAuthenticated',
        'userName'
      ])
    },
  }
</script>
