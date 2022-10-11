<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="back()">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="titleItem"
             :class="{active : index === currentIndex_1 || index === currentIndex}"
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
  props:{
    currentIndex:{
      type:Number,
      default(){
        return 0
      }
    }
  },
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex_1 : 0 || this.currentIndex,
      // currentIndex_2 : 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex_1 = index
      this.$emit('itemClick',index)
    },
    back(){
      this.$router.back()
    }
  },
  watch:{
    'currentIndex':function (newval){
      this.currentIndex_1 = newval
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