<template lang="html">
  <div id="view-job" v-if="selectedJob">

    <img v-if='selectedJob.company_logo' :src="selectedJob.company_logo" alt="company logo" id="logo">
    <h2>{{selectedJob.position}}</h2>
    <h5>{{selectedJob.company}}</h5>
    <h5 v-if='!selectedJob.company'>Company unlisted</h5>
    <p>{{selectedJob.description}}<a :href="selectedJob.url" target="_blank">Find out more Here</a></p>
    <div id="tag-list" >
      <p v-for="tag in selectedJob.tags" class="tags">{{tag}}</p>
    </div>
    <div class="">
      <input class="w3-btn w3-black" type="button" value="Button" v-on:click="selectedJob = null">
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  data() {
    return {
      selectedJob: null
    }
  },
  mounted(){
    eventBus.$on('job-selected', (job) => {this.selectedJob = job})
  },
  methods:{
  }
}
</script>



<style lang="css" scoped>
  #view-job{
    position: fixed;
    background-color: green;
    left: 0;
    right: 0;
    margin-left: 20%;
    margin-right: 20%;
    min-width: 50%;
    padding: 15px;
    border-radius: 5px;
    border: 5px solid black;
  }

  #logo {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }

  a:link {
  text-decoration: none;
  }

a:hover {
  text-decoration: underline;
  }

  #tag-list {
  }

  .tags {
    display: inline-block;
    margin-top: 0px;
    margin-left: 5px;
  }
</style>
