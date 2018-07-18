<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/css/reset.css'; /*引入公共样式*/
html {
  width: 100%;
  height: 100%;
}
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  display: flex;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  min-width: 320px;
  max-width: 768px;
}
</style>
