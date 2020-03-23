<template>
  <div id="app">
    <h1 id="heading">Commented.</h1>
    <div class="container">
      <CommentContainer />
    </div>
  </div>
</template>

<script>
import CommentContainer from './components/CommentContainer.vue';

export default {
  name: 'App',
  components: {
    CommentContainer
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #e5f0fa;
}
h4 {
  margin-top: 0;
  margin-bottom: 0;
}
div, input, textarea {
  &:hover, &:focus, &:active {
    outline: none;
  }
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
  width: 40rem;
  margin: 0 auto;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 0.25rem solid #e2e2e2;
  border-top: 0.25rem solid #fff;
  border-left: 0.25rem solid #f1f1f1;
  border-bottom: 0.25rem solid #b9b9b9;
}
</style>
