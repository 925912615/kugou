<template lang="html">
  <transition name="slide">
    <div class="paihang-info">
      <music-banner back="/paihang" :title="dataInfo.rankname" :bannerImgUrl="dataInfo.bannerurl" :addtime="addtime" :bannerTime="true"></music-banner>
      <music-list :songs="songsList"></music-list>
    </div>
  </transition>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import MusicBanner from 'base/music-banner/music-banner'

export default {
  name: 'paihang-info',
  data(){
    return{
      dataInfo: {},
      songsList: [],
      addtime: ""
    }
  },
  created(){
    this.getDate()
  },
  methods: {
    async getDate(){
      let data=await (await fetch(`http://localhost:2020/paihang/${this.$route.params.id}`)).json();
      this.dataInfo=data.info
      this.songsList=data.songs.list
      this.addtime=data.songs.list[0].addtime.slice(0,10)
    }
  },
  computed: {
  },
  components: {
    MusicBanner,
    MusicList
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
</style>
