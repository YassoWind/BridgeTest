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
            <el-button type="primary" @click="submit">提交</el-button>
            <el-button type="primary" @click="dorpout">退出</el-button>
          </el-form-item>
          </el-form>
        </div>
      </transition>
        <div class="info">
            <p>巡检管养信息录入</p>
            <el-table
              :data="tableData"
              style="width: 100%"
              :default-sort = "{prop: 'date', order: 'descending'}"
              >
              <el-table-column
                prop="RecordTime"
                label="日期"
                sortable
                width="100px">
              </el-table-column>
              <el-table-column
                prop="ItemDescription"
                label="病害信息"
                width="165px">
              </el-table-column>
              <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              </template>
            </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';

export default {
  data() {
      return {
        show:false,
        tableData: [],
        form: {
          longitude: '',
          latitude: '',
          heights:''
        }
      }
  },
  methods: {
    edit:function(){
      this.show = !this.show;
    },
    dorpout:function(){
      this.show=false;
    },
    //点击编辑  将单列的数据存到from中
    handleEdit(index, row) {
      this.show = !this.show;
        console.log(index);
        console.log(this.tableData[index]);
        this.form.KeyId = this.tableData[index].KeyId;
        this.form.jsonlist  = this.tableData[index];
        this.form.bridgeID= 273;
    },
    submit:function(){
      var that = this;
      if(!this.form.longitude){
        this.$message('经度不能为空！');
      }else if(!this.form.latitude){
        this.$message('纬度不能为空！');
      }else if(!this.form.heights){
        this.$message('高度不能为空！');
      }else{
        var fromlist = this.form;
        console.log(fromlist)
        axios.post("http://localhost:3000/addinspectioninfo",fromlist)
        .then(function (res) {
          if(res.data){
            that.$message('添加成功!');
            console.log(res.data);
            that.tablelist = res.data;
          }
        }, function (error) {
          console.log(error)
        })
      }
    }
  },
  created:function(){
    var that = this;
    axios.get(API_PROXY+"http://116.211.87.25:86/Map/ashx/MapHandler.ashx?action=diseaseInfo&math=0.4807647597547984&DiseaseAreaToPoint=&DiseaseBridge=273")
    .then(function (res) {
      //console.log(res)
      that.tableData = res.data;
    }, function (error) {
      console.log(error)
    })
  }
};
</script>

<style lang="less" scoped>
.menbercontent {
  width: 370px;
  height: calc(100% - 6px);
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  border-radius: 5px;
  z-index: 100;
  .edit {
    width: 250px;
    height: 220px;
    position: absolute;
    top: 0;
    left: 370px;
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
</style>
