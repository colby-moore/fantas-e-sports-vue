<template>
    <div>
        <div class="landing-modal">
            <h1 class="landing-modal-header">Fantas-e</h1>
            <b-carousel id="carousel-fade" class="fill" style="text-shadow: 0px 0px 2px #000" fade indicators
                img-width="1024" img-height="480">
                <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10">
                </b-carousel-slide>
                <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12">
                </b-carousel-slide>
                <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22">
                </b-carousel-slide>
            </b-carousel>
        </div>
        <div class="landing-about-fantase">
            <h5>The leading provider of</h5>
            <h5>online fantasy E-Sports drafts for Counter</h5>
            <h5>Strike, League of Legends, Dota 2, and Overwatch</h5>
            <!-- the one place  where developers love cs more than dota -->
        </div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>1 of 3</b-col>
                <b-col>2 of 3</b-col>
                <b-col>3 of 3</b-col>
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

    @media only screen and (max-width: 600px) {
        img {
            height: 100%;
            width: 100%;
        }
    }
</style>