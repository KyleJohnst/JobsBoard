<template lang="html">
  <div id="container">
    <h1>Remote Jobs Board</h1>
    <div class="column">
      <h3>Jobs</h3>
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
      <h2>Favourites</h2>
      <draggable id="favs_list" :list="favourites" group="jobs" >
        <div id="job-card" v-for="(job, index) in favourites" :key="index">
          <h3>{{job.position}}</h3>
        </div>
      </draggable>
    </div>

</div>
</template>

<script>
import draggable from 'vuedraggable';

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
}

#job_list{
  display: -webkit-box;
  max-width: 50%;
  display: -webkit-box;
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
  background-color: orange;
}

#job-card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
}

#favs_list{
  width: 100%;
  height: 500px;
  border: 1px solid black;
  display: -webkit-box;
  background-color: pink;
}

#logo {
  height: 50px;
  width: 50px;
}

</style>
