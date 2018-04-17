<template>
<ul class="inspection">
    <li class="header">巡检养护</li>
    <li><div class="left"><img src="http://bhm.bsri.com.cn:200/uploadFiles/nanchang2/daily/pic/%E5%8D%97%E6%98%8C%E5%B8%82-%E8%8B%B1%E9%9B%84%E5%A4%A7%E6%A1%A5-%E6%A1%A5%E9%9D%A2%E7%B3%BB-%E6%8A%A4%E6%A0%8F-%E5%85%B6%E4%BB%96%E5%BC%82%E5%B8%B8-2017-12-21-10-19-11.jpg"/></div>
    <div class="content">
        <p>英雄大桥/护栏/其他异常异常异常异常异常</p><p>2017-12-21 10:19:17</p>
    </div>
    <a>跳转</a>
    </li>
    <li><div class="left"><img src="http://bhm.bsri.com.cn:200/uploadFiles/nanchang2/daily/pic/%E5%8D%97%E6%98%8C%E5%B8%82-%E8%8B%B1%E9%9B%84%E5%A4%A7%E6%A1%A5-%E6%A1%A5%E9%9D%A2%E7%B3%BB-%E6%8A%A4%E6%A0%8F-%E5%85%B6%E4%BB%96%E5%BC%82%E5%B8%B8-2017-12-21-10-19-11.jpg"/></div>
    <div class="content">
        <p>英雄大桥/护栏/其他异常</p><p>2017-12-21 10:19:17</p>
    </div>
    <a>跳转</a>
    </li>
    <li><div class="left"><img src="http://bhm.bsri.com.cn:200/uploadFiles/nanchang2/daily/pic/%E5%8D%97%E6%98%8C%E5%B8%82-%E8%8B%B1%E9%9B%84%E5%A4%A7%E6%A1%A5-%E6%A1%A5%E9%9D%A2%E7%B3%BB-%E6%8A%A4%E6%A0%8F-%E5%85%B6%E4%BB%96%E5%BC%82%E5%B8%B8-2017-12-21-10-19-11.jpg"/></div>
    <div class="content">
        <p>英雄大桥/护栏/其他异常</p><p>2017-12-21 10:19:17</p>
    </div>
    <a>跳转</a>
    </li>
    <li><div class="left"><img src="http://bhm.bsri.com.cn:200/uploadFiles/nanchang2/daily/pic/%E5%8D%97%E6%98%8C%E5%B8%82-%E8%8B%B1%E9%9B%84%E5%A4%A7%E6%A1%A5-%E6%A1%A5%E9%9D%A2%E7%B3%BB-%E6%8A%A4%E6%A0%8F-%E5%85%B6%E4%BB%96%E5%BC%82%E5%B8%B8-2017-12-21-10-19-11.jpg"/></div>
    <div class="content">
        <p>英雄大桥/护栏/其他异常</p><p>2017-12-21 10:19:17</p>
    </div>
    <a>跳转</a>
    </li>
    <li><div class="left"><img src="http://bhm.bsri.com.cn:200/uploadFiles/nanchang2/daily/pic/%E5%8D%97%E6%98%8C%E5%B8%82-%E8%8B%B1%E9%9B%84%E5%A4%A7%E6%A1%A5-%E6%A1%A5%E9%9D%A2%E7%B3%BB-%E6%8A%A4%E6%A0%8F-%E5%85%B6%E4%BB%96%E5%BC%82%E5%B8%B8-2017-12-21-10-19-11.jpg"/></div>
    <div class="content">
        <p>英雄大桥/护栏/其他异常</p><p>2017-12-21 10:19:17</p>
    </div>
    <a>跳转</a>
    </li>
</ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    
  },
  
};
</script>

<style lang="less" scoped>
.inspection{
    width: 13.8%;
    min-width: 255px;
    position: absolute;
    top:50px;
    left: 0;
    z-index: 100;
    background-color: #ededed;
    border-radius: 3px;
    .header{
        width: 100%;
        height: 30px;
        text-align: center;
        line-height: 30px;
    }
    li{
        width: 100%;
        height: 50px;
        border-bottom:1px solid #333;
        display:block;
        img{
            display: inline-block;
            width: 40px;
            height: 40px;
            margin: 5px 0 0 5px;
        }
    }
    .left{
        float: left;
        display: inline-block;
        width: 50px;
        height: 50px;
    }
    .content{
        float: left;
        display: inline-block;
        width: 160px;
        height: 50px;
        line-height: 24px;
        p{
            width: 100%;
            height: 25px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
        }
    }
    a{
        width: 40px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        text-align: center;
        margin-top: 10px;
        border-radius: 3px;
        border:1px solid #333;
    }
    a:hover{
        background-color: #ffffff;
    }
}
</style>
