<template>
<div class="main">
  <transition name="el-zoom-in-left">
  <menberEquipmentInfoCom v-show="menberShow" @allout="menberEquipmentInfoClick"/>
  </transition>

<transition name="el-zoom-in-left">
<inspectionInfoCom v-show="inspectionShow"/>
</transition>

<transition name="el-zoom-in-left">
<healthInfoCom v-show="healthShow"/>
</transition>

<headereditcom :text="text" @menberEquipmentInfo="menberEquipmentInfoClick"  @InspectionInfo="InspectionInfoClick" @healthInfo="healthInfoClick"/>
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
import headereditcom from "../components/headeredit";
import store from "@/vuex/store";
import menberEquipmentInfoCom from "../components/menberEquipmentInfoCom";
import inspectionInfoCom from "../components/inspectionInfoCom";
import healthInfoCom from "../components/healthInfoCom";


export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "name"
      },
      data: [{ name: "" }],
      text: "白沙洲大桥1",
      menberShow: false,
      inspectionShow:false,
      healthShow:false,
      inspectionJson: []
    };
  },
  store,
  methods: {
    jumpurl: function(data) {
      console.log(data);
    },
    //构件和设备信息
    menberEquipmentInfoClick: function() {
      this.inspectionShow=false;
      this.healthShow=false;
      this.menberShow = !this.menberShow;
    },
    //巡检管养信息
    InspectionInfoClick: function() {
      this.menberShow = false;
      this.healthShow = false;
      this.inspectionShow = !this.inspectionShow;
    },
    //健康监测信息
    healthInfoClick: function() {
      this.menberShow = false;
      this.inspectionShow = false;
      this.healthShow=!this.healthShow;
    }

  },
  components: {
    headereditcom,menberEquipmentInfoCom,inspectionInfoCom,healthInfoCom
  },
  created:function(){
    // //再创建时期将巡检养护的数据加载
    //   var json = changejson(this.$store.state.json.inspection);
    //   this.inspectionJson = jsonbylist(json);
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
