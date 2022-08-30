<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recomend-view :recommends="recommends"/>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";
import {getHomeMultidata} from "@/network/home";
import homeSwiper from "@/views/Home/childComps/HomeSwiper";
import recomendView from "@/views/Home/childComps/RecommendView";

export default {
  name: "myHome",
  components:{
    navBar,
    homeSwiper,
    recomendView
  },
  data(){
    return{
      banners:[],
      recommends:[]
    }
  },
  created() {
    //1、请求多个数据
    getHomeMultidata().then(res=>{
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  },
}

</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
}
</style>
