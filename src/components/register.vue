<template>
  <b-container class="register-container">
        <b-row>
            <div class="register">
                <h3>Fantas-e Register</h3>
                
                <input 
                type="text" 
                v-model="email" 
                placeholder="Email address" 
                class="input" 
                required>
                
                <br/>

                <input 
                type="password" 
                v-model="password"
                placeholder="Password" 
                class="input" 
                required>

                <br/>

                <button v-on:click="register" class="button">Enter</button>

                <!-- <p><router-link to="/signup">
                New Here? Create a new account
                </router-link></p> -->
            </div>
        </b-row>
    </b-container>
</template>

<script>
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCjJ0ZYkcq2f7cE6vKgrGVNPD7HnaEHeoM",
    authDomain: "fantase-a38e7.firebaseapp.com",
    databaseURL: "https://fantase-a38e7.firebaseio.com",
    projectId: "fantase-a38e7",
    storageBucket: "fantase-a38e7.appspot.com",
    messagingSenderId: "35231952230",
    appId: "1:35231952230:web:5f5b1301d4287f55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default {
    name: 'register',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        register: function(e) {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(
                user => {
                    // console.log(user);
                    alert(`Account Created for ${user.email}`);
                    this.$router.push('/')
                },
                err => {
                    alert(err.message);
                }
            );
            e.preventDefault();
        }
    }
}
</script>

<style>
    .register-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>