<template lang="html">
<transition name="slide">
<div class="paihang-info">
  <mt-header v-if="dataInfo" fixed :title="dataInfo.rankname">
    <router-link to="/paihang" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
  <div class="banner">
    <img v-if="dataInfo.bannerurl" :src="dataInfo.bannerurl|imgurl"/>
    <span v-if="addtime" class="banner-info">更新时间: {{addtime}}</span>
  </div>
  <div class="wrap">
    <mt-cell
      v-for="(item,index) in dataSongsList"
      :key="item.audio_id"
      :title="item.filename"
      :value="item.extname">
    </mt-cell>
  </div>
</div>
</transition>
</template>

<script>
export default {
  name: 'paihang-info',
  data(){
    return{
      dataInfo: {},
      dataSongsList: {},
      addtime: false
    }
  },
  created(){
    this.getDate()
  },
  methods: {
    async getDate(){
      let data=await (await fetch(`http://localhost:2020/paihang/${this.$route.params.id}`)).json();
      this.dataInfo=data.info
      this.dataSongsList=data.songs.list
      this.addtime=data.songs.list[0].addtime.slice(0,10)
    }
  },
  computed: {
    // PaihangInfo(){
    //   return this.$store.getters.paihang;
    // }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.paihang-info
  position: fixed
  z-index: 100
  top: 0
  left: 0
  right: 0
  bottom: 0
  width: 100%
  height: 100%
  background: $color-background
.slide-enter-active,.slide-leave-active
  transition: all 0.3s
.slide-enter,.slide-leave-to
  transform: translate3d(100%,0,0)
.mint-header.is-fixed
  background: $color-background-d
.banner
  position: relative;
  width: 100%
  height: 35%;
  img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
  .banner-info
    position: absolute
    left: 20px
    bottom: 20px
    color: white
.wrap
  width: 100%
  height: 65%
  overflow-y: scroll;
</style>
