<template>
  <div class="content">
    <h2>{{title}}</h2>
    <img src="../public/img/1.jpg"
         alt="">
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      title: '好好学习webpack'
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async  getInfo () {
      let res = await axios.get('/api/goods/list')
      console.log(res)
    }
  }
}
</script>
<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    transform: rotate(30deg);
    background: url("../public/img/1.jpg") no-repeat;
  }
}
</style>