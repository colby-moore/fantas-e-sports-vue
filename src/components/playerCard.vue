<template>
  <div class="player-card">
    <div class="player-picture-overlay"></div>
    <img src="@/assets/info-logos/profile.jpg" alt="">
    <div class="player-number-box">
      <h4 class="player-number">20</h4>
    </div>
    <div class="player-info">
      <div class="divider-line"></div>
      <h5 class="player-name">Player Name</h5>
      <h6 class="player-position">@Entry Fragger</h6>
    </div>
  </div>
</template>

<script>
export default {
    name: 'playerCard'
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
</style>