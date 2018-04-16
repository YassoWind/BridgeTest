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
    <el-dropdown-item command="bridge1">白沙洲大桥1</el-dropdown-item>
    <el-dropdown-item command="bridge2">白沙洲大桥2</el-dropdown-item>
    <el-dropdown-item command="bridge3">白沙洲大桥3</el-dropdown-item>
    <el-dropdown-item command="bridge4">白沙洲大桥4</el-dropdown-item>
    <el-dropdown-item command="bridge5">白沙洲大桥5</el-dropdown-item>
    <el-dropdown-item command="bridge6">白沙洲大桥6</el-dropdown-item>
    <el-dropdown-item command="bridge7">白沙洲大桥7</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
</span>
<span class="option">
    <span class="inspection">巡检养护</span>
    <span class="health">健康检测</span>
    <span class="space">空间量测</span>
    <span class="venue">场地布置</span>
    <span class="bridge">桥梁量化</span>
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
  min-width: 1040px;
  .logo {
    display: inline-block;
    width: 65%;
    padding-left: 20px;
    min-width: 500px;
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
    width: 25%;
    text-align: right;
    min-width: 400px;
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
