<template>
  <div>
    hello vue
    <input type="text" ref="mytext"/>
    <button @click = "handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
       {{data}}
      </li>

    </ul>

    <navbar>
      <button @click="isShow = !isShow">navbar</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
// 全局注册
// import Vue from 'vue'
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)

// ES6 导出
export default {
  data () {
    return {
      datalist: [],
      isShow: true
    }
  },
  methods: {
    handleAdd () {
      this.datalist.push(this.$refs.mytext.value)
    }
  },
  components: {
    navbar: navbar,
    sidebar: sidebar
  }

}
</script>

<style lang = scss>

  ul {
    list-style: none;
    li{
      background: yellow;
      }
  }
</style>
