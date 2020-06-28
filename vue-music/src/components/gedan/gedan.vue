<template>
<div class="gedan">
<bg-cell
 v-for="item in gedan"
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
  methods: {
    selectItem(item){
      this.$router.push(`/gedan/${item.specialid}`)
    }
  },
  computed: {
    gedan(){
      return this.$store.getters.gedan;
    }
  },
  components: {
    BgCell
  }
}
</script>

<style lang="stylus" scoped>
</style>
