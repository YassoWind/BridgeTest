<template>
<div class="main">
<inspectioncom v-show="show"/>
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
    <h1>白沙洲大桥1</h1>
  </div>
</div>
</div>

</template>

<script>
import {changejson} from "../assets/js/changejson.js";
import headercom from "../components/header";
import store from '@/vuex/store';
import inspectioncom from "../components/inspectioncom"

export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name"
      },
      data: [{name:""}],
      text: "白沙洲大桥1", 
      show:false
    };
  },
  store,
  methods: {
    jumpurl:function(data) {
      console.log(data);
    },
    inspectionchange:function(){
      console.log(this.data[0].name);
      if(this.data[0].name=="桥梁亮化"||this.data[0].name=="动态应变计"){
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
      this.show = !this.show;
      // console.log(this.data[0].name)
      // if(this.data[0].name!="巡检养护"){
      //   var json = changejson(this.$store.state.json.inspection)
      //   this.data = JSON.parse(JSON.stringify(json));
      // }else{
      //   var data2=[{name:""}];
      //   this.data = JSON.parse(JSON.stringify(data2));
      // }
      // // console.log(this.data[0].name)
    },
    bridgechange:function(){
      this.show = false;
      if(this.data[0].name!="桥梁亮化"){
        var json = changejson(this.$store.state.json.bridge)
        this.data = JSON.parse(JSON.stringify(json));
      }else{
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    },
    healthchange:function(){
      this.show = false;
      if(this.data[0].name!="动态应变计"){
        var json = changejson(this.$store.state.json.health)
        this.data = JSON.parse(JSON.stringify(json));
      }else{
        var data2=[{name:""}];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    },
    //  renderContent(h, { node, data, store }) {
    //     return (
    //       <span class="custom-tree-node">
    //         <span>{node.label}</span>
    //         <span>
    //           <el-button type="text">跳转</el-button>
    //         </span>
    //       </span>);
    //   }
  },
  components: {
    headercom,inspectioncom
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
      width: 14%;
      min-width: 255px;
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
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
