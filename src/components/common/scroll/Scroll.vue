<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
//    父传子
//     使用第三种监听滚动形式
//     0是默认值
//     1是滑动一段时间触发
//     2是滑动就触发，但是鼠标离开不触发
//     3是只要在动就触发
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted() {
    //1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    //2、监听滚动的位置
    this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    //3、监听上拉加载
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>