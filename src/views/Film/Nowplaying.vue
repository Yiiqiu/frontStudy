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
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
