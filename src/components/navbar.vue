<template>
  <div class="navbar-component">
    <!-- Note: navbar is using dark theme currently, all white page is throwing me off and wanted opinions -->
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img class="logo" src="@/assets/fake-logos/logo1.svg" alt="">
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Events</b-nav-item>
          <b-nav-item href="/">Leaderboards</b-nav-item>
          <b-nav-item href="/login">News</b-nav-item>
          <b-nav-item href="/login">Logged in as: {{ this.currentUser }}</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Note: can add a prop to the dropdown below called "disabled" put it after the prop "right".
          This will disable the interaction with the dropdown menu on the right. Can be useful for managing 
          state in login mode -->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item v-if="!isLoggedIn">
              <router-link to="/login">
                <p>Sign In</p>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="!isLoggedIn">
              <router-link to="/register">
                <p>Register</p>
              </router-link>
            </b-dropdown-item>
            <b-dropdown-item v-if="isLoggedIn">
                <p v-on:click="logout">Logout</p>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from 'firebase'

  export default {
    name: 'navbar',
    props: {

    },
    data() {
      return {
        isLoggedIn: false,
        currentUser: false

      }
    },
    created() { 
        if(firebase.auth().currentUser){
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email;
       }
    },
    methods: {
      logout: function(){
        firebase
          .auth()
          .signOut()
          .then(() => {
            this.$router.push('/login')
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    padding: 1.0rem 1rem;
  }

  .logo{
    width:50px;
  }

  .navbar-brand {
    width: 50px;
    font-weight: bold;
  }

  .navbar-nav {
    font-weight: bold;
  }
</style>