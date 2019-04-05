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
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
  background-image: url("https://images.unsplash.com/photo-1519337718347-749509f114a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80");
  -webkit-background-size: cover;
 -moz-background-size: cover;
 -o-background-size: cover;
 background-size: cover;
}
</style>
