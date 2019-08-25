<template>
  <div class="navbar-component">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#">Fantas-e</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Events</b-nav-item>
          <b-nav-item href="#">Leaderboards</b-nav-item>
          <b-nav-item href="#">News</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Note: can add a prop to the dropdown below called "disabled" put it after the prop "right".
          This will disable the interaction with the dropdown menu on the right. Can be useful for managing 
          state in login mode -->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    props: {

    },
    data() {
      return {
        items: [{
            color: 'blue'
          },
          {
            color: 'red'
          },
          {
            color: 'green'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-component{
    background: red !important;
  }
</style>