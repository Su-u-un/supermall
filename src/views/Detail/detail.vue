<template>
  <div class="detail">
    <DetailNavBar class="detail-nav" @itemClick="itemClick" :current-index="dadIndex"/>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <DetailSwiper :top-items="topItem"/>
      <DetailBaseInfo :goods="this.goods"/>
      <DetailShopInfo :shop="this.shop"/>
      <DetailImagesInfo :images-info="detailsInfo"/>
      <Detail-param-info :param-info="paramsInfo" class="detail-set-scroll" ref="detailParams"/>
      <DetailCommentInfo :comment-info="commentInfo" ref="comment"/>
      <GoodsList :goods="recommendList" :is-recommend="true" ref="recommend"/>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <DetailBottomBar @addToCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/Detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/Detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/Detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/Detail/childComps/DetailShopInfo";
import DetailImagesInfo from "@/views/Detail/childComps/DetailImagesInfo";
import DetailParamInfo from "@/views/Detail/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/Detail/childComps/DetailCommentInfo";
import DetailBottomBar from "@/views/Detail/childComps/DetailBottomBar";
import GoodsList from "@/components/content/goods/GoodsList";
import backTop from "@/components/content/backtop/BackTop";

import {getDetail,getRecommend,Goods,Shop,GoodsParams} from "@/network/detail";
import Scroll from "@/components/common/scroll/Scroll";

export default {  name: "detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll,
    DetailShopInfo,
    DetailImagesInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    backTop
  },
  data(){
    return{
      iid:null,
      topItem:[],
      goods:{},
      shop:{},
      detailsInfo:{},
      paramsInfo:{},
      commentInfo:{},
      isShowBackTop:false,
      thePosition:[],
      dadIndex:0,
      recommendList:[],
      positionY:0,
    }
    },
  beforeCreate() {
    // ?????????????????????tabBar
    this.$store.commit("setTabBarShow", false);
  },
  created(){
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res=>{
      const data = res.data.result
      // console.log(goodsdata);
      //???????????????
      this.topItem = data.itemInfo.topImages
      //??????????????????
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //????????????
      this.shop = new Shop(data.shopInfo)
      //??????????????????
      this.detailsInfo = data.detailInfo
      //??????????????????
      this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule ||{})
      //??????????????????
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }

      this.$nextTick(()=>{
        this.thePosition = []
        this.thePosition.push(0);
        this.thePosition.push(this.$refs.detailParams.$el.offsetTop);
        this.thePosition.push(this.$refs.comment.$el.offsetTop);
        this.thePosition.push(this.$refs.recommend.$el.offsetTop);
      })
    })

    //??????????????????
    getRecommend().then(res=>{
      this.recommendList = res.data.data.list
    })
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setTabBarShow", true);
    next();
  },
  methods:{
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    //?????????????????????
    contentScroll(position) {
      // console.log(position);
      this.positionY = -position.y
      //1.??????BackTop????????????
      this.isShowBackTop = (-position.y) > 1000
      //2.??????tabcontrol????????????
      this.isTabTop = (-position.y) > this.tabOffsetTop
      //????????????????????????
      for (let n = 0; n < this.thePosition.length; n++) {
        // ?????? positionY ???????????????n???????????? thePosition ????????? n-1 ??????????????????????????????
        // ????????????????????????????????????n???
        if (this.positionY >= this.thePosition[n]) {
          this.dadIndex = n
        }
      }
      // console.log(-position.y);
      // for(let i=0;i<4;i++){
      //   if(this.thePosition[i]<=this.positionY<this.thePosition[i+1] || this.positionY>=this.thePosition[3]) {
      //     //???????????????????????????
      //     this.dadIndex = i;
      //     break
      //   }
      // }
      // if(this.positionY<this.thePosition[1]){
      //   //???????????????????????????
      //   this.dadIndex = 0;
      // }
      // else if(this.thePosition[1]<=this.positionY<this.thePosition[2]) {
      //   //???????????????????????????
      //   this.dadIndex = 1
      // }
      // else if(this.thePosition[2]<=this.positionY<this.thePosition[3]) {
      //   //???????????????????????????
      //   this.dadIndex = 2
      // }
      // else if(this.positionY>=this.thePosition[3]){
      //   //???????????????????????????
      //   this.dadIndex = 3
      // }

      // console.log(this.thePosition);
      // console.log(this.dadIndex);
    },
    itemClick(index){
      // console.log(index);
      this.$refs.scroll.scrollTo(0,-this.thePosition[index])
    },
    addToCart(){
      // console.log('....');

      const product = {
        image: this.topItem[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.realPrice,
        id: this.iid
      };
      console.log(product);
      this.$toast.Show('????????????????????????')
      // console.log(product);
      this.$store.dispatch('setCateGoryData', product);
    }
  },
  // watch:{
  //   'positionY':function (newVal){
  //
  //   }
  // }
}
</script>

<style scoped>
.detail{
  background-color: #fff;
  position: relative;
  z-index: 9;
  height:100vh
}
.content{
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.detail-nav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>