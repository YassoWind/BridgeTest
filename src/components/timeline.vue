<template>
<div class="timeline">

</div>
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
  }
}
</script>

<style lang="less" scoped>
.timeline{
    
}
</style>
