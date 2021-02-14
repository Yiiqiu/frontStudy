<template>

  <div>
    广告{{data}}的详情页
  </div>

</template>
<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    // 调试，一步步调，先看看this.$route 到底是什么，再看this.$route.params里有什么
    console.log('要获得的id是', this.$route)
    console.log('要获得的id是', this.$route.params.myid)
    this.data = this.$route.params.myid
  // 真实项目中，根据获得的id再去ajax查询
  }
}
</script>
