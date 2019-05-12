<template>
  <div class="hello">
    <b-container>
      <b-row class="blue">
        <b-col>
          <p>{{message}}</p>
          <ul>
            <li v-for="item in items">{{ item.color }}</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      message: "this is a welcome message that you will see when you open this vue app",
      items: [
        {color: 'blue'},
        {color: 'red'},
        {color: 'green'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.blue{
  background: lightseagreen;
}
.column1{
  background: red;
}
</style>
