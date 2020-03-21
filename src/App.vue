<template>
  <div id="app">
    <h1 id="heading">Commented.</h1>
    <div class="container">
      <Comment msg="Welcome to Your Vue.js App" />
    </div>
  </div>
</template>

<script>
import Comment from './components/Comment.vue';

export default {
  name: 'App',
  components: {
    Comment,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #e5f0fa;
}
h4 {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#heading {
  font-size: 3rem;
  text-transform: lowercase;
  font-family: 'Roboto Slab', serif;
  color: #212529;
  // color: #4e4d94;
}
.container {
  background-color: #fff;
  box-shadow: 0px 4px 8px 0px rgba(73, 80, 87, 0.25);
  // box-shadow: 0px 4px 8px 0px rgb(199, 175, 163);

  width: 40rem;
  margin: 0 auto;
  border-radius: 0.25rem;
  padding: 0.5rem;
}
</style>
