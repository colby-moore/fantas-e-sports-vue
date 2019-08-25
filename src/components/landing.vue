<template>
    <div>
        <div class="landing-modal">
            <h1 class="landing-modal-header">Fantas-e</h1>
            <b-carousel id="carousel-fade" class="fill" style="text-shadow: 0px 0px 2px #000" fade indicators
                img-width="1024" img-height="480">
                <!-- Note that these are using imgur links to the image source rather than the assets folder,
                having trouble with carousele getting an absolute image path by passing the path to the prop of "img-src" -->
                <b-carousel-slide caption="First slide" img-src="https://i.imgur.com/GMUq4pc.jpg">
                </b-carousel-slide>
                <b-carousel-slide caption="Second Slide" img-src="https://i.imgur.com/SfT1C8j.jpg">
                </b-carousel-slide>
                <b-carousel-slide caption="Third Slide" img-src="https://i.imgur.com/dKxsDAC.jpg">
                </b-carousel-slide>
            </b-carousel>
        </div>
        <div class="landing-about-fantase">
            <h5>The leading provider of</h5>
            <h5>online fantasy E-Sports drafts for Counter</h5>
            <h5>Strike, League of Legends, Dota 2, and Overwatch</h5>
            <!-- the one place  where developers love cs more than dota -->
        </div>
        <b-container fluid class="info-peak">
            <b-row>
                <b-col sm="12" md="4"> 
                    <img src="@/assets/info-logos/hoodie.svg"/>
                    <h4>Choose your favorite players</h4>
                    <p>Lorem ipsum dolor sit amet, no nam putant intellegam, alii iriure cum et. Pro an quis brute porro, quo alienum sententiae ex.</p>
                </b-col>
                <b-col sm="12" md="4">
                    <img src="@/assets/info-logos/money.svg"/>
                    <h4>New tournaments weekly</h4>
                    <p>Lorem ipsum dolor sit amet, no nam putant intellegam, alii iriure cum et. Pro an quis brute porro, quo alienum sententiae ex.</p>
                </b-col>
                <b-col sm="12" md="4">
                    <img src="@/assets/info-logos/graph.svg"/>
                    <h4>Check your teams stats</h4>
                    <p>Lorem ipsum dolor sit amet, no nam putant intellegam, alii iriure cum et. Pro an quis brute porro, quo alienum sententiae ex.</p>
                </b-col>
            </b-row>
        </b-container>
    </div>

</template>

<script>
    export default {
        name: 'landing',
    }
</script>

<style scoped>
    /* Note: Vue supports SASS and LESS scope styling... I don't think I have the SASS-Loader installed 
    which is why it doesn't work if you change it, which is why I am using normal CSS at the moment. Will
    want to refactor this at some point before we have tons of styling. Luckily scoped styling keeps styling
    to a minimum as it seperates out for each component */
    .landing-modal {
        position: relative;
        font-family: 'Pacifico', cursive;
    }

    .landing-modal-header {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        opacity: .8;
        letter-spacing: 12.5px;
        font-family: 'pacifico';
        font-size: 11.5vw;
        color: #333;
    }

    .landing-about-fantase{   
        margin-top: 5%;
        margin-bottom: 5%;
        font-weight: bold;
    }

    .landing-about-fantase h5{
        font-size: 1.5em;
        opacity: 1;
        letter-spacing: 0.2em;
        text-align: center;
        font-weight: 600;
    }

    .fill {
        position: relative;
        opacity: .35;
        width: 100%;
        height: 100%;
        background-position: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;
    }

    img {
        height: auto;
        width: 100%;
    }

    .info-peak{

    }

    .info-peak h4{
        font-weight: 600;
        font-size: 18px;
    }

    .info-peak p{
        padding: 0 20px;
    }

    .info-peak img{
        width: 80px;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 600px) {
        img {
            height: 100%;
            width: 100%;
        }
    }
</style>