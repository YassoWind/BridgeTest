<template>
<header>
<span class="logo">
    武汉城市桥梁三维地理信息管理系统
</span>
<span class="brigename">
<el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    {{text}}<i class="el-icon-caret-bottom"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="bridge1">新武黄立交</el-dropdown-item>
    <el-dropdown-item command="bridge2">南湖大桥</el-dropdown-item>
    <el-dropdown-item command="bridge3">青化立交</el-dropdown-item>
    <el-dropdown-item command="bridge4">青年路立交</el-dropdown-item>
    <el-dropdown-item command="bridge5">朱家河大桥</el-dropdown-item>
    <el-dropdown-item command="bridge6">竹叶山立交</el-dropdown-item>
    <el-dropdown-item command="bridge7">鹦鹉立交</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</span>
<span class="option">
    <span class="inspection" @click="menberEquipmentInfo">构件和设备信息</span>
    <span class="health" @click="InspectionInfo">巡检管养信息</span>
    <span class="space">空间量测</span>
    <span class="venue">场地布置</span>
    <span class="bridge" @click="healthInfo">健康监测信息</span>
</span>

</header>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleCommand(command) {
      this.$router.push({ path: "/"+command});
    },
    menberEquipmentInfo:function(){
      this.$emit('menberEquipmentInfo')
    },
    InspectionInfo:function(){
      this.$emit('InspectionInfo')
    },
    healthInfo:function(){
      this.$emit('healthInfo')
    }
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
header {
  height: 50px;
  width: 100%;
  background-color: #222222;
  color: #9d9d9d;
  line-height: 50px;
  display: flex;
  min-width: 1055px;
  .logo {
    display: inline-block;
    width: 60%;
    padding-left: 20px;
    min-width: 420px;
  }
  .brigename {
    display: inline-block;
    width: 8%;
    min-width: 100px;
    text-align: center;
    .el-dropdown-link {
      color: #9d9d9d;
    }
  }
  .option {
    display: inline-block;
    width: 30%;
    text-align: right;
    min-width: 500px;
    span {
      margin: 0 10px;
    }
    span:hover {
      color: #fff;
      transition: 0.5s;
    }
  }
}
</style>
