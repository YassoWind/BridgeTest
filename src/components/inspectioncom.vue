<template>
<transition name="el-fade-in-linear">
<ul class="inspection">
    <li class="header">巡检养护</li>
    <li v-for="item in list" ><div class="left"><img :src="item.imgSrc"/></div>
    <div class="content">
        <p>{{item.title}}</p><p>{{item.date}}</p>
    </div>
    <a @click="jumpurl(item.url)">跳转</a>
    </li>
</ul>
</transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
      jumpurl(url){
          window.open(url,'','height=400, width=1000, top=400, left=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');    
      }
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.inspection {
  width: 13.8%;
  min-width: 255px;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 100;
  background-color: #ffffff;
  border-radius: 3px;
  .header {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  li {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #333;
    display: block;
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin: 5px 0 0 5px;
    }
  }
  .left {
    float: left;
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .content {
    float: left;
    display: inline-block;
    width: 160px;
    height: 50px;
    line-height: 24px;
    p {
      width: 100%;
      height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  a {
    width: 40px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #333;
  }
  a:hover {
    background-color: #ededed;
  }
}
</style>
