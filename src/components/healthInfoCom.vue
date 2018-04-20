<template>
    <div class="menbercontent">
      <transition name="el-zoom-in-left">
        <div class="edit" v-show="show">
          <p>编辑坐标</p>
          <el-form ref="form" :model="form" label-width="60px" size="mini">
          <el-form-item label="经度：">
            <el-input v-model="form.longitude" placeholder="请输入经度"></el-input>
          </el-form-item>
          <el-form-item label="纬度：">
            <el-input v-model="form.latitude" placeholder="请输入纬度"></el-input>
          </el-form-item>
          <el-form-item label="高度：">
            <el-input v-model="form.heights" placeholder="请输入高度"></el-input>
          </el-form-item>
          </el-form>
           <el-form ref="form" :model="form" label-width="35px" size="mini">
          <el-form-item>
            <el-button type="primary" @click="submitForm()">取点</el-button>
            <el-button type="primary" @click="resetForm('dynamicValidateForm')">提交</el-button>
            <el-button type="primary" @click="dorpout">退出</el-button>
          </el-form-item>
          </el-form>
        </div>
      </transition>
        <div class="info">
            <p>巡检管养信息录入</p>
            <el-tree
              :data="data"
              node-key="id"
              ref="tree"
              default-expand-all
              highlight-current
              :props="defaultProps"
              :expand-on-click-node="false"
            >
            <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
              <el-button
                type="text"
                size="mini"
                @click="() => edit(node, data)">
                编辑
              </el-button>
          </span>
            </el-tree>
        </div>

    </div>
</template>

<script>
import {changejsontree} from "../assets/js/changejsontree.js"
import axios from 'axios';
const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';

export default {
  data() {
      return {
        defaultProps: {
        children: "children",
        label: "PointName"
      },
        show:false,
        tableData: [],
        form: {
          longitude: '',
          latitude: '',
          heights:''
        },
        data:[]
      }
  },
  methods: {
    edit:function(){
      this.show = !this.show;
    },
    dorpout:function(){
      this.show=false;
    },
    handleEdit(index, row) {
        console.log(index, row);
        this.show = !this.show;
        console.log(this.show)
    },
    edit:function(node, data){
      this.show = !this.show;
    }
  },
  created:function(){
    var that = this;
    axios.get(API_PROXY+"http://116.211.87.25:86/Map/ashx/MapHandler.ashx?action=pointInfo&PointArea=&PointBridge=273")
    .then(function (res) {
      // console.log(res.data)
      that.data = changejsontree(res.data);
    }, function (error) {
      console.log(error)
    })
  }
};
</script>

<style lang="less" scoped>
.menbercontent {
  width: 13.8%;
  min-width: 255px;
  height: calc(100% - 6px);
  position: absolute;
  margin: auto;
  top: 50px;
  left: 0;
  background-color: #ffffff;
  border-radius: 5px;
  z-index: 100;
  box-sizing: border-box;
  .edit {
    width: 250px;
    height: 220px;
    position: absolute;
    top: 0;
    left: 100%;
    border: 1px solid #9f9f9f;
    border-radius: 5px;
    background-color: #f6f6f6;
    z-index: 20330;
    padding-right: 10px;
    p{
      text-align: center;
      font-size: 16px;
      margin: 5px 0;
    }
  }
  .info {
    width: 100%;
    height: 100%;
    overflow: auto;
    p {
      text-align: center;
      font-size: 18px;
      line-height: 40px;
      border-bottom: 1px solid #cccccc;
    }
  }
}


.el-tree-node__content .el-button:nth-child(1){
  display: none;
}
</style>
