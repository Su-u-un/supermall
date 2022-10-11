<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage(goodsItem)" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    // imageLoad(){
    //   this.$bus.$emit('itemImageLoad')
    // }
    itemClick(item){
      this.$router.push('/detail/' + this.goodsItem.iid)
    },
    //动态显示图片
    showImage(item){
      return item.img || item.image ||item.show.img;
    }
  }
}
</script>

<style scoped>
.goods-item {
  /*底部空出40px*/
  padding-bottom: 40px;
  /*相对定位*/
  position: relative;
  /*占当前行的48%*/
  width: 48%;
}

.goods-item img {
  /*height: 100%;*/
  width: 100%;
  /*圆角5px*/
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  /*绝对定位*/
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  /*防止父级边框塌陷*/
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  /*文本溢出显示省略标记*/
  text-overflow: ellipsis;
  /*强制同一行内显示所有文本文字不换行*/
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg/") 0 0/14px 14px;
}
</style>
