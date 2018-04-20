<template>
    <div class="menbercontent">
        <p>构件和设备信息录入</p>
        <div class="edit">
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
          <el-form-item label="名称：">
            <el-input v-model="form.name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="类型：">
            <el-input v-model="form.type" placeholder="请输入类型"></el-input>
          </el-form-item>
          <el-form-item label="链接：">
            <el-input v-model="form.url" placeholder="请输入链接"></el-input>
          </el-form-item>
          </el-form>
           <el-form ref="form" :model="form" label-width="32px" size="mini">
          <el-form-item>
            <el-button type="primary" @click="submitForm()">取点</el-button>
            <el-button type="primary" @click="addmenberinfo">提交</el-button>
            <el-button type="primary" @click="dropout">退出</el-button>
          </el-form-item>
          </el-form>
        </div>

        <div class="info">
            <p>构件和设备信息展示</p>
            <el-table
              :data="tablelist"
              style="width: 100%;">
              <el-table-column
                fixed
                prop="type"
                label="类型"
                width="70">
              </el-table-column>
              <el-table-column
                prop="name"
                label="名称"
                width="110"
                text-align="center">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="50">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tablelist)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
          longitude: '',
          latitude: '',
          heights: '',
          name: '',
          type: '',
          url: '',
        },
      tablelist:[]
    };
  },
  methods: {
    //根据id移除
    deleteRow(index, rows) {
      var id = this.tablelist[index].id;
      var that = this;
      axios.post("http://localhost:3000/delMenber",{id})
        .then(function (res) {
         that.$message('删除成功!');
        }, function (error) {
          console.log(error)
        })
      rows.splice(index, 1);
    },
    dropout:function(){
      this.$emit('allout')
    },
    addmenberinfo:function(){
      if(!this.form.longitude){
        this.$message('经度不能为空');
      }else if(!this.form.latitude){
        this.$message('纬度不能为空');
      }else if(!this.form.heights){
        this.$message('高度不能为空');
      }else if(!this.form.name){
        this.$message('名称不能为空');
      }else if(!this.form.type){
        this.$message('类型不能为空');
      }else if(!this.form.url){
        this.$message('链接不能为空');
      }else{
        var that = this;
        var fromlist = this.form;
        fromlist.bridgeID=273;
        axios.post("http://localhost:3000/addmenberinfo",fromlist)
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
   axios.get("http://localhost:3000/selectMenber")
        .then(function (res) {
          that.tablelist = res.data;
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
  background-color: #fff;
  border-radius: 5px;
  z-index: 100;
  padding-right: 10px;
  box-sizing: border-box;
  p {
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    
  }
  .edit {
    width: 100%;
    height: 330px;
    border-bottom: 1px solid #9f9f9f;

  }

  .info {
    width: 100%;
    height: 550px;
    overflow: auto;
    p {
      text-align: center;
      font-size: 18px;
      line-height: 40px;
    }
  }
}

</style>
