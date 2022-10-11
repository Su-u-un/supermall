<template>
  <div>
    <p class="recommend" v-show="isRecommend">推荐商品</p>
    <div class="goods">
      <goods-list-item v-for="(item,id) in goods" :goods-item="item" :key="id"/>
    </div>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    },
    isRecommend:{
      type:Boolean,
      default(){
        return false
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
.recommend {
  text-align: center;
  font-size: 17px;
  padding: 10px 0;
}

</style>