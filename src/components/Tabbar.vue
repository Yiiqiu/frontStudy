<template>
<nav>
<ul>
<!--  声明式导航-->
  <ul>
    <router-link to="/film" tag="li" active-class="myactive" >film</router-link>
    <router-link to="/cinema" tag="li" active-class="myactive">cinema</router-link>
    <router-link to="/center" tag="li" active-class="myactive">center</router-link>
  </ul>

<!-- <li>-->
<!--   <a href='#/film'>film</a>-->
<!-- </li>-->
<!--  <li>-->
<!--    <a href='#/cinema'>cinema</a>-->
<!--  </li>-->
<!--  <li>-->
<!--    <a href='#/center'>center</a>-->
<!--  </li>-->

</ul>

</nav>

</template>

<style lang="scss" scoped>

  .myactive{
    color: red;
  }

</style>
