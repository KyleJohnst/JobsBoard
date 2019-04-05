<template lang="html">
  <div id="view-job" v-if="selectedJob">

    <img v-if='selectedJob.company_logo' :src="selectedJob.company_logo" alt="company logo" id="logo">
    <h2>{{selectedJob.position}}</h2>
    <h4>{{selectedJob.company}}</h4>
    <h4 v-if='!selectedJob.company'>Company unlisted</h4>
    <p>{{selectedJob.description}}<a :href="selectedJob.url" target="_blank">Find out more Here</a></p>
    <h5>Tags</h5>
    <div id="tag-list" >
      <p v-for="tag in selectedJob.tags" class="tags">{{tag}},</p>
    </div>
    <div class="">
      <input id="button" type="button" value="Close" v-on:click="selectedJob = null">
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
    background-color: #3d403df2;
    left: 0;
    right: 0;
    margin-left: 20%;
    margin-right: 20%;
    min-width: 50%;
    padding: 15px;
    border-radius: 5px;
    border: 5px solid #6161613d;

  }

  #logo {
    height: 50px;
    width: 50px;
    border-radius: 5px;
  }

  a:link {
  text-decoration: none;
  color: #62bade;
  }

a:hover {
  text-decoration: underline;
  }

  a:visited {
  text-decoration: none;
  color: #de2052;
}

#button {
  background-color: #bfbfbf;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 5px;
  border: none;
}

#button:hover {
  background-color: #c34848;
  color: white;
}


  .tags {
    display: inline-block;
    margin-top: 0px;
    margin-left: 5px;
  }
</style>
