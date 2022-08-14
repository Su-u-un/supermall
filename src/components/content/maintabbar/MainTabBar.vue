<template>
  <tabbar>
    <!--回到这边插东西到item里-->
    <item path="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/redhome.svg" alt="">
      <div slot="text">首页</div>
    </item>
    <item path="/menu">
      <img slot="icon" src="~assets/img/tabbar/menu.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/redmenu.svg" alt="">
      <div slot="text">分类</div>
    </item>
    <item path="/shopcar">
      <img slot="icon" src="~assets/img/tabbar/shopcar.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/redshopcar.svg" alt="">
      <div slot="text">购物车</div>
    </item>
    <item path="/user">
      <img slot="icon" src="~assets/img/tabbar/user.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/reduser.svg" alt="">
      <div slot="text">我的</div>
    </item>
  </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/TabBar"
import item from "components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    tabbar,
    item
  }
}
</script>

<style scoped>

</style>
