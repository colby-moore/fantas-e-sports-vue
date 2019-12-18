<template>
  <b-container class="login-container">
        <b-row>
            <div class="login">
                <h3>Fantas-e Login</h3>
                
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
        login: function(e) {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(
                user => {
                    alert(`You are logged in as ${user.email}`);
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
    .login-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>