<template>
<div class="main">
<inspectioncom v-show="show"  :list="inspectionJson"/>
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
    <h1>{{text}}</h1>
  </div>
</div>
</div>

</template>

<script>
import { changejson } from "../assets/js/changejson.js";
import { jsonbylist } from "../assets/js/jsonbylist.js";
import headercom from "../components/header";
import store from "@/vuex/store";
import inspectioncom from "../components/inspectioncom";

export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name"
      },
      data: [{ name: "" }],
      text: "白沙洲大桥7",
      show: false,
      inspectionJson: []
    };
  },
  store,
  methods: {
    jumpurl: function(data) {
      console.log(data);
    },
    //巡检养护
    inspectionchange: function() {
      //控制其他树显示隐藏
      if (this.data[0].name == "桥梁亮化" || this.data[0].name == "动态应变计") {
        var data2 = [{ name: "" }];
        this.data = JSON.parse(JSON.stringify(data2));
      }
      this.show = !this.show;
    },
    //桥梁量化
    bridgechange: function() {
      this.show = false;
      if (this.data[0].name != "桥梁亮化") {
        var json = changejson(this.$store.state.json.bridge);
        this.data = JSON.parse(JSON.stringify(json));
      } else {
        var data2 = [{ name: "" }];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    },
    //健康检测
    healthchange: function() {
      this.show = false;
      if (this.data[0].name != "动态应变计") {
        var json = changejson(this.$store.state.json.health);
        this.data = JSON.parse(JSON.stringify(json));
      } else {
        var data2 = [{ name: "" }];
        this.data = JSON.parse(JSON.stringify(data2));
      }
    }

  



  },
  components: {
    headercom,
    inspectioncom
  },
  created:function(){
    //再创建时期将巡检养护的数据加载
      var json = changejson(this.$store.state.json.inspection);
      this.inspectionJson = jsonbylist(json);
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
