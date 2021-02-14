<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="data in datalist" :key="data" @click="handleChangePage(data)">
         {{data}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: ['1', '2', '3']
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(`/detail/${id}`)
      // 路由的1种写法
      // this.$router.push(`/detail/${id}`)
      // 路由的另外一种写法，命名路由
      this.$router.push({ name: 'mydetail', params: { myid: id } })
    }
  }
}
</script>
