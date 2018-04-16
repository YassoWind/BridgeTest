<template>
<div class="main">
<headercom :text="text"/>
<div class="content">
  <div class="sidebar">
    <el-tree
      :data="data4"
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
    >
    </el-tree>
  </div>
  <div class="gis">

  </div>
</div>
</div>

</template>

<script>
import headercom from "../components/header";

export default {
  data() {
    const data = [
      {id: 1,label: "一级 1",children: [{id: 4,label: "二级 1-1"},{id: 10,label: "三级 1-1-2"}]},
      {id: 2,label: "一级 2",children: [{id: 5,label: "二级 2-1"},{id: 6,label: "二级 2-2"}]},
      {id: 3,label: "一级 3",children: [{id: 7,label: "二级 3-1"},{id: 8,label: "二级 3-2"}]}
    ];
    return {
      data4: JSON.parse(JSON.stringify(data)),
      data5: JSON.parse(JSON.stringify(data)),
      text:"白沙洲大桥5"
    };
  },
  methods: {
  },
  components:{
    headercom
  },
};
</script>

<style lang="less" scoped>
.main{
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
