<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/money">Money</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// This in App.vue Composite Api Store
import { provideStore } from './store-composite-api'

export default {
    props: {
        name: String
    },
    setup(props, {root: {$store}}) {
        // Set global store
        provideStore($store);
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
