<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="data in datalist" :key="data.id" @click="handleChangePage(data)">
         {{data.nm}}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      datalist: ['1', '2', '3']
    }
  },
  mounted () {
    axios({
      url: '/ajax/movieOnInfoList?token=&optimus_uuid=95D5BC406E0011EB8E2F1DBC23FF48409BF5E314A9BE4469A114A553C6923067&optimus_risk_level=71&optimus_code=10'
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.movieList
    }
    )
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=95D5BC406E0011EB8E2F1DBC23FF48409BF5E314A9BE4469A114A553C6923067&optimus_risk_level=71&optimus_code=10')
    //   .then(res => {
    //     // console.log(res.data)
    //     this.datalist = res.data.movieList
    //   })
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
