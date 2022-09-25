<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back()">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="titleItem"
             :class="{active : index === currentIndex}"
             @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components:{
    navBar
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex : 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
}
.titleItem{
  flex: 1;
  font-size: 14px;
}
.active{
  color:var(--color-high-text)
}
.back img{
  margin-top:11px;
  margin-right: 15px;
}
</style>