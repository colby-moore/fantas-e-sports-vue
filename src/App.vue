<template>
  <div id="app">
    <div>
      <h3>wubba lubba dub dub look at these users being pulled from firestorrrreeee:</h3>
    </div>
    <div>
      <ul id="example-1">
        <li v-for="user in testCollection" :key="user">
          {{ user }}
        </li>
      </ul>
    </div>
    <navbar />
    <landing />
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import landing from './components/landing.vue'

  // We will need to add this to a firestore.config file to keep seperate from the main app, this is a test to pull data
  firebase.initializeApp({
    apiKey: "AIzaSyCjJ0ZYkcq2f7cE6vKgrGVNPD7HnaEHeoM",
    authDomain: "fantase-a38e7.firebaseapp.com",
    projectId: "fantase-a38e7",
  });

  export default {
    name: 'app',
    components: {
      navbar,
      landing
    },
    data() {
      return {
        testCollection: [],
      };
    },
    mounted() {
      var db = firebase.firestore();

      db
        .collection('users')
        .get()
        .then(snap => {
          const testCollection = [];
          snap.forEach(doc => {
            testCollection.push({
              [doc.id]: doc.data()
            });
          });
          this.testCollection = testCollection;
        });
    },
  }
</script>

<style>
  #app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>