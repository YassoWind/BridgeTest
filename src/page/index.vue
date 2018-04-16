<template>
<div class="content">
<headercom :text="text"/>
</div>
</template>

<script>
import headercom from "../components/header";
export default {
  data() {
    return {
      text:""
    }
  },
  components:{
    headercom
  },
  mounted () {
    this.text = this.$route.query.command?this.$route.query.command:"白沙洲大桥1";
  }
}


</script>

<style lang="less" scoped>
.content{
  width: 100%;
  height: 100%;
}
</style>
