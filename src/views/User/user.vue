<template>
  <div id="user">
    <!--顶部栏-->
    <nav-bar class="user-nav">
      <div slot="center">我的</div>
    </nav-bar>
    <!--头像/个人信息-->
    <div class="card">
      <div style="display: inline-flex">
        <div class="photo">头像</div>
        <div>用户名</div>
      </div>
      <div>设置</div>
    </div>
    <!--收藏/订阅店铺/足迹-->
    <div class="note">
      <div class="note-item">收藏</div>
      <div class="note-item">订阅</div>
      <div class="note-item">足迹</div>
    </div>
    <!--订单/待付款/待收货-->
    <div class="purchase">
      <div class="purchase-item">订单</div>
      <div class="purchase-item">待付款</div>
      <div class="purchase-item">待收货</div>
      <div class="purchase-item">待评价</div>
    </div>
    <!--商品推荐-->
    <div>
      使用首页的商品列
      <goodsList />
    </div>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import goodsList from "@/components/content/goods/GoodsList";

export default {
  data() {
    return {

    };
  },
  components: {
    navBar,
    goodsList
  },
  created() {

  },
  methods: {

  }
};
</script>
<style scoped>
#user {
  height: 100vh;
}
.user-nav {
  background: var(--color-tint);
  color: #fff;
  margin-bottom: 13px;
}
.card{
  background-color: pink;
  display:flex;
  justify-content: space-between;
  height:100px;
  margin-bottom: 13px;
}
.photo{
  height:55px;
  width:55px;
  background-color: #dcacac;
  margin: 9px;
}
.note{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:80px;
  background-color: pink;
  margin-bottom: 13px;
  vertical-align: center;
}
.note-item{
  margin: 3px;
  height:50px;
  width: 50px;
  background-color: #dcacac;
  text-align: center;
}
.purchase{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  height:80px;
}
.purchase-item{
  margin: 3px;
  height:50px;
  width: 50px;
  background-color: #dcacac;
  text-align: center;

}
</style>
