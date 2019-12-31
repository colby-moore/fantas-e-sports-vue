<template>
  <div id="players">
    <b-container fluid>
        <b-row class="players-to-row">
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
            <playerCard />
        </b-row>
    </b-container>
  </div>
</template>

<script>
import playerCard from './playerCard'

export default {
    name: 'players',
    components: {
        playerCard
    }
}
</script>

<style>
    #players{
        padding: 50px;
        background-color: white;
        width: 100%;
        min-height: 100vh;
    }

    .players-to-row{
        justify-content: space-evenly;
    }

</style>