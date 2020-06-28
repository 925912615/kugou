<template>
  <transition name="slide">
    <div class="gedan-list">
      <music-banner back="/gedan" :bannerImgUrl="dataInfo.imgurl" :title="dataInfo.specialname" :bannerTime="false"></music-banner>
      <music-list :songs="songsList"></music-list>
    </div>
  </transition>
</template>

<script>
import MusicList from 'base/music-list/music-list'
import MusicBanner from 'base/music-banner/music-banner'

export default {
  name: 'gedan-list',
  data(){
    return{
      dataInfo: {},
      songsList: [],
    }
  },
  created(){
    this.getDate();
  },
  methods: {
    async getDate(){
      let data=await (await fetch(`http://localhost:2020/gedan/${this.$route.params.id}`)).json();
      this.dataInfo=data.info.list
      console.log(this.dataInfo);
      this.songsList=data.list.list.info
      console.log(this.songsList);
    }
  },
  components: {
    MusicBanner,
    MusicList
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"

.gedan-list
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: $color-background
.slide-enter-active,.slide-leave-active
  transition: all 0.3s
.slide-enter,.slide-leave-to
  transform: translate3d(100%,0,0)
.banner
  height: 40% !important
.wrap
  height: 60% !important
</style>
