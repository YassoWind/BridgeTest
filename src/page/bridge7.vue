<template>
<div class="main">
<headercom :text="text" @inspection="inspectionchange"  @bridge="bridgechange" @health="healthchange"/>
<div class="content">
  <div class="sidebar">
    <el-tree
      :data="data"
      node-key="id"
      ref="tree"
      default-expand-all
      highlight-current
      :props="defaultProps"
      :expand-on-click-node="false"
      @node-click="jumpurl"
    >
    </el-tree>
  </div>
  <div class="gis">
    <h1>白沙洲大桥7</h1>
  </div>
</div>
</div>

</template>

<script>
import {changejson} from "../assets/js/changejson.js"
import headercom from "../components/header";
import store from '@/vuex/store'

export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name"
      },
      data: [{name:""}],
      text: "白沙洲大桥7", 
    };
  },
  store,
  methods: {
    jumpurl:function(data) {
      console.log(data);
    },
    inspectionchange:function(){
      console.log(this.data[0].name)
      if(this.data[0].name!="巡检养护"){
        var json = changejson(this.$store.state.json.inspection)
        this.data = JSON.parse(JSON.stringify(json));
      }else{
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
      // console.log(this.data[0].name)
    },
    bridgechange:function(){
      if(this.data[0].name!="桥梁亮化"){
        var json = changejson(this.$store.state.json.bridge)
        this.data = JSON.parse(JSON.stringify(json));
      }else{
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    },
    healthchange:function(){
      if(this.data[0].name!="动态应变计"){
        var json = changejson(this.$store.state.json.health)
        this.data = JSON.parse(JSON.stringify(json));
      }else{
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    }
  },
  components: {
    headercom
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    height: calc(100% - 6px);
    display: flex;
    .sidebar {
      width: 13%;
      min-width: 240px;
      height: 100%;
      background-color: #fff;
      float: left;
    }
    .gis {
      width: 87%;
      height: 100%;
      background-color: #7c7c7c;
      min-width: 800px;
      float: right;
    }
  }
}
</style>
