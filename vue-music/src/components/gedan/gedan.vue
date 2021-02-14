<template>
<div class="gedan">
<bg-cell
 v-for="item in dataList"
 :key="item.id"
 :title="item.specialname"
 :label="item.playcount"
 :icon="true" @click.native="selectItem(item)">
  <img slot="img" :src="item.imgurl|imgurl" width="100" height="100" alt="">
  <span slot="icon" class="iconfont icon-all"></span>
</bg-cell>
  <router-view></router-view>
</div>
</template>

<script>
import BgCell from 'base/bg-cell/bg-cell'

export default {
  name: 'gedan',
  data() {
    return {
      dataList: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    selectItem(item){
      this.$router.push(`/gedan/${item.specialid}`)
    },
    async getData(){
      const { data: res } = await this.$axios.get('http://localhost:2020/gedan');
      this.dataList = res.plist.list.info;
    }
  },
  computed: {
  },
  components: {
    BgCell
  }
}
</script>

<style lang="stylus" scoped>
</style>
