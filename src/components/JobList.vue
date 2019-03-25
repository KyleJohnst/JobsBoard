<template lang="html">
  <div id="container">
    <h1>Remote Jobs Board</h1>
    <div id="job_list">
      <draggable @start="drag=true" @end="drag=false">

      <div v-if='!job.legal' v-for="job in jobs" id="job-card" >
        <h3>{{job.position}}</h3>
        <h5>{{job.company}}</h5>
        <h5 v-if='!job.company'>Company unlisted</h5>

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
      jobs: []
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
#job_list{
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
}

#job-card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
}
</style>
