<template>
  <div id="nav">
    <Header />
  </div>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import Header from './components/Header.vue';

document.title = 'Harry\'s Page';
export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
