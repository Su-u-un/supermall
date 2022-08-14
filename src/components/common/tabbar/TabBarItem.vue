<template>
  <div class="item" @click="jump">
    <!--默认图标-->
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <!--当前页图标-->
    <div v-else><slot name="active-icon"></slot></div>
    <!--模块文本-->
    <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String
  },
  methods:{
    jump(){
      this.$router.push(this.path);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style scoped>
/*当前模块的样式*/
.active{
  /*默认当前页是红色*/
  color: red;
}
/*整个大个的item的样式*/
.item{
  flex:1;
  text-align: center;
  font-size: 12px;
}
/*item内图片的样式*/
.item img{
  height: 24px;
  width:24px;
  margin-top:2px;
}
</style>