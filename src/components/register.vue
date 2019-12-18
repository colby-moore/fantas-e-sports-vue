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
import db from './firebaseInit'


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