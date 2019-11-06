<template>
  <div>
      关注
      <router-view></router-view>

  </div>
  
</template>

<script>
export default {
  data() {
    return {
      list:[],
      list(){
        this.$axiso.get("/api/TabList").then(res=>{
            console.log(res.data)
        })
      }
    }
  },
  created() {
    this.list()
  },
}
</script>

<style>

</style>