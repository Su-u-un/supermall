<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tabbar{
  /*样式：浮动还是 行 还是 块 还是 行内块*/
  display: flex;
  background-color: #f6f6f6;
  /*导航栏高度默认都是49px*/
  height: 49px;
  /*定位：固定*/
  position: fixed;
  /*距离底部，左端，右端*/
  bottom:0;
  left:0;
  right:0;
  /*给导航栏的上面加一点小阴影*/
  box-shadow: 0 -1px 1px rgba(100,100,100,.1);
}
</style>