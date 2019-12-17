<template>
  <b-container class="login-container">
        <b-row>
            <div class="login">
                <h3>Fantas-e</h3>
                
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

                <button v-on:click="login" class="button">Enter</button>

                <!-- <p><router-link to="/signup">
                New Here? Create a new account
                </router-link></p> -->
            </div>
        </b-row>
    </b-container>
</template>

<script>
import firebase from 'firebase'


export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        login () {
            console.log("test login");
         }
    }
}
</script>

<style>
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>