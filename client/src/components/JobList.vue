<template lang="html">
  <div id="container">
    <h1 class="dashed-shadow">Remote Jobs Board</h1>
    <div class="column">
      <h2>Available Jobs</h2>
      <draggable :list="jobs" group="jobs" id="job_list">
        <div id="job-card" v-for="(job, index) in jobs" :key="index" v-if="!job.legal">
          <img v-if='job.company_logo' :src="job.company_logo" alt="company logo" id="logo">
          <h3>{{job.position}}</h3>
          <h5>{{job.company}}</h5>
          <h5 v-if='!job.company'>Company unlisted</h5>
        </div>
      </draggable>
    </div>

    <div class="column">

      <h2 id='fav_tag'>Favourites</h2>
      <draggable id="favs_list" :list="favourites" group="jobs" >
        <div id="job-card" v-for="(job, index) in favourites" :key="index">
          <img v-if='job.company_logo' :src="job.company_logo" alt="company logo" id="logo">
          <h3>{{job.position}}</h3>
          <div class="">
            <input id="button" type="button" value="View Job" v-on:click="viewJob(job)">
          </div>
        </div>
      </draggable>
    </div>

</div>
</template>

<script>
import draggable from 'vuedraggable';
import {eventBus} from '../main.js';

export default {
  name: 'jobs-list',
  data(){
    return {
      jobs: [],
      favourites:[]
    }
  },
  components: {
    draggable,
  },
  mounted(){
    this.fetchJobs()
  },
  methods:{
    fetchJobs(){
      fetch(" http://localhost:3000/jobs")
      .then(res => res.json())
      .then(res => this.jobs = res)
    },
    viewJob(job){
      eventBus.$emit('job-selected', job)
    }
  }
}
</script>

<style lang="css" scoped>
#container{
  column-width:
}
.column{
  float: left;
  width: 50%;
  text-align: center;
  background: #ffffff00;
}

#job_list{
  display: -webkit-box;
  max-width: 100%;
  height: 480px;
  overflow: scroll;

}
#job-card{
  border: 1px solid black;
  display: inline-block;
  text-align: center;
  margin: 5px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-left-radius: 3px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  list-style: none;
  background-color: #a2a19e85;
  width: 60%;
  /* height: 50%; */
}

#job-card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
}

/* #favs_list{
  width: 40%;
  height: 480px;
  position: fixed;
  display: -webkit-box;
  background-color: #aba6a71c;
  padding-bottom: 10px;
  right: 20px;
  margin-top: 55px;
  overflow: scroll;
  border: 3px solid #a097978f;
  border-radius: 8px;
} */

#favs_list{
  display: -webkit-box;
  max-width: 100%;
  height: 480px;
  overflow: scroll;
  border: 3px solid #a097978f;
  border-radius: 8px;
  background-color: #403c3d63;
  margin-left: 15%;
  margin-right: 15%;
}

#button {
  background-color: #bfbfbf;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  border-radius: 5px;
  border: none;
}

#button:hover {
  background-color: #83bd58b3;
  color: white;
}

#logo {
  height: 50px;
  width: 50px;
  border-radius: 5px;
}

/* #fav_tag{
  position: fixed;
  right: 14%;
} */

h1 {
  font-size: 30pt;
}


</style>
