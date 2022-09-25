<template>
  <div class="detail">
    <DetailNavBar class="detail-nav"/>
    <Scroll class="content">
      <DetailSwiper :top-items="topitem"/>
      <DetailBaseInfo :goods="this.goods"/>
    </Scroll>
  </div>
</template>

<script>
import DetailNavBar from "@/views/Detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/Detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/Detail/childComps/DetailBaseInfo";

import {getDetail,Goods} from "@/network/detail";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll
  },
  data(){
    return{
      iid:null,
      topitem:[],
      goods:{}
      }
    },
  created(){
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res=>{
      const data = res.data.result
      this.topitem = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    })
  }
}
</script>

<style scoped>
.detail{
  background-color: #fff;
  position: relative;
  z-index: 8;
  height:100vh
}
.content{
  height:calc(100% - 44px)
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>