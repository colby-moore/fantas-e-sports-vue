<template>
    <b-container fluid class="register-container">
        <img class="register-container-background" src="@/assets/carousel/infernoPitcontrast.jpg" />
        <b-row>
            <div class="register-form">
                <img class="logo" src="@/assets/fake-logos/logo1.svg" alt="">
                <h3 class="register-header">Fantas-e<br/>Register</h3>
                
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

                    <button v-on:click="register" class="button">Register</button>
                </div>

                <p class="login-link">
                    <router-link to="/login">
                        Already have an account? Sign in here
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
    name: 'register',
    data: function() {
      return {
        email: '',
        password: '',
        debug: true
      }
    },
    methods: {
        register: function(e) {
            if(this.debug){
                this.$router.push('/')
            }
            else{
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(
                        user => {
                            // console.log(user);
                            alert(`Account Created for ${user.user.email}`)
                            this.$router.push('/')
                        },
                        err => {
                            alert(err.message)
                        }
                    );
                e.preventDefault()
            }
        }
    }
}
</script>

<style scoped>
    .register-container{
        background: linear-gradient(45deg, rgb(0%, 0%, 0%, .7),rgb(100%, 100%, 91%,.7));
        display: flex;
        justify-content: center;
        align-items: center;
        height: calc(100vh - 92px);
    }

    .register-container-background{
        position: absolute;
        object-fit: cover;
        width: 100%;
        height: calc(100% - 92px);
        z-index: -1;
    }

    .logo{
        width: 75px;
    }

    .register-header{
        margin: 10px 0 30px 0;
        font-family: 'Open Sans', sans-serif; 
        font-weight: bold;
    }

    .register-form{
        position: relative;
        background-color: white;
        padding: 60px 50px 100px 50px;
        border-radius: 8px;
    }

    .register-form input{
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

    .login-link{
        position: absolute;
        left: 0;
        bottom: 20px;
        margin: auto;
        right: 0;
    }
</style>