<template>
  <div class="player-card" v-bind:class="[{ 'choosen-card': isActive }]" @click="handleClick">
    <div class="player-picture-overlay"></div>
    <img src="@/assets/info-logos/profile.jpg" alt="">
    <div class="player-number-box">
      <h4 class="player-number">20</h4>
    </div>
    <div class="player-info">
      <div class="divider-line"></div>
      <h5 class="player-name">{{this.playerName}}</h5>
      <h6 class="player-position">@Entry Fragger</h6>
    </div>
    <div class="round">
      <input type="checkbox" id="checkbox" @click="addBorder()" />
      <label for="checkbox"></label>
    </div>
  </div>
</template>

<script>
export default {
    name: 'playerCard',
    data: function() {
      return {
        playerName: "colby",
        isActive: false,
      }
    },
    methods: {
      addBorder() {
        this.isActive = !this.isActive
      },
      handleClick() {
    	  this.$emit('click', this.playerName)
      }
    }
}
</script>

<style>
    .player-card{
      position: relative;
      width: calc(20% - 6px);
      margin: 3px;
      height: 400px;
      background-color: bisque;
      border-radius: 0px;
    }

    @media screen and (max-width: 1200px){
      .player-card{
        width: calc(25% - 6px);
      }
    }

    @media screen and (max-width: 1024px){
      .player-card{
        width: calc(33% - 6px);
      }
    }

    @media screen and (max-width: 876px){
      .player-card{
        width: calc(50% - 6px);
      }
    }

    @media screen and (max-width: 600px){
      .player-card{
        width: calc(100% - 6px);
      }
    }

    .player-number-box{
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 20px;
      left: 20px;
      border: 1px solid white;
      width: 50px;
      height: 50px;
    }

    .player-number{
      margin: 0;
      font-weight: bold;
      color: white;
    }

    .player-info{
      padding: 20px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 125px;
      margin-left: auto;
      margin-right: auto;
    }

    .divider-line{
      border-radius: 4px;
      height: 2px;
      background-color: white;
      margin: 0 auto 15px auto;
    }

    .player-name{
      font-size: 18px;
      text-align: left;
      color: white;
      letter-spacing: -1.5px;
    }

    .player-position{
      position: absolute;
      bottom: 10px;
      font-weight: bold;
      font-size: 14px;
      text-align: left;
      color: white;
      letter-spacing: -1px;
    }

    .player-picture-overlay{
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #275fea;
      opacity: .45;
      border-radius: 0px;
    }

    .player-card img{
      border-radius: 0px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    /* Box shadow for card when clicked */
    .choosen-card{
      -webkit-box-shadow: 0px 0px 22px 12px rgba(231,166,26,1);
      -moz-box-shadow: 0px 0px 22px 12px rgba(231,166,26,1);
      box-shadow: 0px 0px 22px 12px rgba(231,166,26,1);
    }

    /* Styling for input checkbox when clicked */
    .round {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
    }

    .round label {
      width: 100%;
      height: 100%;
      cursor: pointer;
      left: 0;
      position: absolute;
      top: 0;
    }

    .round label:after {
      z-index: 999;
      right: -16px;
      border: 9px solid lightgreen;
      border-top: none;
      border-right: none;
      content: "";
      height: 19px;
      opacity: 0;
      position: absolute;
      top: -2px;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      width: 43px;
    }

    .round input[type="checkbox"] {
      visibility: hidden;
    }

    .round input[type="checkbox"]:checked + label {
      width: 100%;
      height: 100%;
    }

    .round input[type="checkbox"]:checked + label:after {
      opacity: 1;
    }
</style>