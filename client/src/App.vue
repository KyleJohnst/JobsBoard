<template>
  <div id="app">
    <job-list />
    <job-View />
  </div>
</template>

<script>
import JobList from './components/JobList.vue';
import JobView from './components/JobView.vue';



export default {
  name: 'app',
  components: {
    JobList,
    JobView
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
  margin-top: 60px;
}
</style>
