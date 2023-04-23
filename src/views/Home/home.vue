<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tab-control1" ref="tabControl1"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 v-show="isTabTop"/>
    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recomend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control ref="tabControl2"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"/>
      <goods-list :goods="showGoods" />
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata,getHomeGoods} from "@/network/home";
import homeSwiper from "@/views/Home/childComps/HomeSwiper";
import recomendView from "@/views/Home/childComps/RecommendView";
import featureView from "@/views/Home/childComps/FeatureView";
import tabControl from "@/components/content/tabControl/TabControl";
import GoodsList from  "@/components/content/goods/GoodsList"
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

export default {
  name: "Home",
  components:{
    navBar,
    homeSwiper,
    recomendView,
    featureView,
    tabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabTop:false,
      saveY:0
    }
  },
  created() {
    //1、请求多个数据
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    // this.$bus.$on('itemImageLoad',()=>{
    //   // this.$refs.scroll.refresh()
    //   console.log('----');
    // })

  },
  methods:{
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position) {
      //1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
      //2.判断tabcontrol是否停留
      this.isTabTop = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
        // console.log(res);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
// console.log(res)
        this.$refs.scroll.finishPullUp()
      })
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed:{
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  activated() {
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
    // console.log(this.saveY);
  }
}

</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

  /*position: fixed;*/
  /*left:0;*/
  /*right:0;*/
  /*top:0;*/
  /*z-index:9;*/
}
/*.tab-control2 {*/
/*  position: sticky;*/
/*  top: 44px;*/
/*  z-index: 9;*/
/*}*/
.tab-control1{
  position: relative;
  z-index: 9;
}
.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
