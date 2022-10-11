<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-show="$store.getters.tabBarShow"/>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/maintabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    mainTabBar,
  }
}
</script>

<style>
@import "assets/css/base.css";

body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}
</style>
