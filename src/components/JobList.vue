<template lang="html">
  <div class="">
    <h1>HI</h1>
    <div v-if='!job.legal' v-for="job in jobs" class="">
      <h3>{{job.position}}</h3>
      <h5>{{job.company}}</h5>
      <h5 v-if='!job.company'>Company unlisted</h5>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'jobs-list',
  data(){
    return {
      jobs: []
    }
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
</style>
