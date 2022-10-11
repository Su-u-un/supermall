<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "DetailBottomBar",
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height:49px;
  text-align: center;
  right: 0;
  left: 0;
  position: fixed;
  bottom: 0;
  background-color: white;
  border-top: 1px solid rgba(100, 100, 100, 0.1);

}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex:1;
}
.bar-left .text{
  display: block;
  font-size: 13px;
  width:100%;
  height:100%;
  margin-top:-1px
}
.bar-left .icon{
  display: block;
  width:20px;
  height:20px;
  margin:10px auto 3px;
  background:url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .service{
  background-position: 0 -48px;
}
.bar-left .shop{
  background-position: 0 -89px;
}
.bar-right{
  font-size:15px;
  color:white;
  line-height:49px
}
.bar-right .cart{
  background-color:#ffe817;
  color:#333;
}
.bar-right .buy{
  background-color:#f69;
}
</style>
