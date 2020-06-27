<template>
  <div id="tabbar">
    <div class="page-tabbar">
      <mt-tabbar
        v-model="selected"
        fixed
      >
        <mt-tab-item id="xinge">
          <span slot="icon" class="iconfont">&#xe6ef;</span>
          <span class="tabbar-name">新歌</span>
        </mt-tab-item>
        <mt-tab-item id="paihang">
          <span slot="icon" class="iconfont">&#xe6f3;</span>
          <span class="tabbar-name">排行</span>
        </mt-tab-item>
        <mt-tab-item id="gedan">
          <span slot="icon" class="iconfont">&#xe6f2;</span>
          <span class="tabbar-name">歌单</span>
        </mt-tab-item>
        <mt-tab-item id="geshou">
          <span slot="icon" class="iconfont">&#xe6f0;</span>
          <span class="tabbar-name">歌手</span>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      selected: 'xinge'
    };
  },
  created(){
    let localData = window.localStorage.getItem('navTabIndex')
    this.selected = localData
  },
  watch: {
    selected: function(val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      this.$router.push(val);
      window.localStorage.setItem('navTabIndex',val);
    }
  },
};
</script>
<style lang="stylus" rel="stylesheet/less" scoped>
.mint-tab-item
  &.is-selected
    background: #fafafa;
    .mint-tab-item-label
      .iconfont
        color: #259af8;
      .tabbar-name
        color: #259af8;
</style>
