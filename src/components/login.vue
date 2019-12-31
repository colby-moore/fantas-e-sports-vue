<template>
  <b-container fluid class="login-container">
      <img class="login-container-background" src="@/assets/carousel/infernoAcontrast.jpg" />
        <b-row>
            <div class="login-form">
                <img class="logo" src="@/assets/fake-logos/logo1.svg" alt="">
                <h3 class="login-header">Fantas-e<br>Login</h3>
                
                <div class="">
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

                    <button v-on:click="login" class="button">Sign in</button>
                </div>

                <p class="register-link">
                    <router-link to="/register">
                        New Here? Create a new account
                    </router-link>
                </p>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import firebase from 'firebase'
import db from './firebaseInit'

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
                    alert(`You are logged in as ${user.user.email}`);
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

<style scoped>
    .login-container{
        background: linear-gradient(45deg, rgb(0%, 0%, 0%, .7),rgb(100%, 100%, 91%,.7));
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 92px);
    }

    .login-container-background{
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: calc(100% - 92px);
        z-index: -1;
    }

    .logo{
        width: 75px;
    }

    .login-header{
        margin: 10px 0 30px 0;
        font-family: 'Open Sans', sans-serif; 
        font-weight: bold;
    }

    .login-form{
        position: relative;
        background-color: white;
        padding: 60px 50px 100px 50px;
        border-radius: 8px;
    }

    .login-form input{
        padding: 15px;
        margin: 10px;
        border-radius: 15px;
        min-width: 250px;
        min-height: 55px;
        border: none;
        -webkit-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);
        box-shadow: 0px 0px 15px 2px rgba(0,0,0,0.1);

    }

    .button{
        margin-top: 30px;
        height: 40px;
        min-width: 120px;
        border: none;
        background-color: lightgreen;
        border-radius: 20px;
        font-weight: bold;
        font-size: 14px;
        -webkit-box-shadow: 0px 6px 23px -4px rgba(78,228,78,.6);
        -moz-box-shadow: 0px 6px 23px -4px rgba(78,228,78,.6);
        box-shadow: 0px 6px 23px -4px rgba(78,228,78,.6);
    }

    .register-link{
        position: absolute;
        left: 0;
        bottom: 20px;
        margin: auto;
        right: 0;
    }
</style>