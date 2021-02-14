<template>
  <div class="player" v-show="playlist.length>0">
    <div v-if="playing_one.authors" class="normal-player" v-show="fullScreen">
      <!-- 遮罩 -->
      <div class="background">
        <img width="100%" height="100%" :src="authors.avatar">
      </div>
      <!-- 顶部 -->
      <div class="top">
        <div class="back" @click="back">👇</div>
        <h2 class="top-title">{{playing_one.audio_name}}</h2>
      </div>
      <!-- 中间 -->
      <div class="middle">
        <div v-show="!geci" class="middle-l">
          <div class="cd-wrap">
            <div class="cd">
            <img width="100%" height="100%" :src="authors.avatar">
          </div>
          </div>
        </div>
        <div v-show="geci" class="middle-r">
          歌词
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
          <div class="dot-wrapper">
          </div>
        </div>
    </div>
    <div @click="open" class="mini-player" v-show="!fullScreen"></div>
    <audio ref="audio" :src="playing_one.play_url"></audio>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "player",
  data() {
    return {
      show: true,
      geci: false,
    };
  },
  mounted() {
  },
  methods: {
    back() {
      this.setFullScreen(false);
    },
    open() {
      this.setFullScreen(true);
    },
    ...mapMutations({
      setFullScreen: "SET_FULL_SCREEN",
    }),
    ...mapActions(["savePlayHistory"]),
  },
  computed: {
    ...mapGetters([
      'fullScreen',
      'playlist',
      'currentSong',
      'playing_one'
    ]),
    authors(){
      return this.playing_one.authors[0]
    }
  },
  watch: {
    playing_one(){
      this.$nextTick(()=>{
        this.$refs.audio.play();
      })
    }
  }
};
</script>

<style lang="stylus" scoped>
.player
  .normal-player
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color #fff
    z-index: 100;
    .background
      position absolute 
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity 0.6
      filter blur(20px)
    .top
      position relative
      margin-bottom 25px
      .back
        position absolute 
        top 10px
        left 6px
      .top-title
        position absolute
        top 10px
        left 50%
        transform translateX(-50%)
    .middle
      position fixed
      top 80px
      bottom 170px
      width 100%
      white-space: nowrap
      font-size: 0
      .middle-l
        vertical-align: top
        width 100%
        position relative
        height: 0
        padding-top: 80%
        .cd-wrap
          width: 80%
          height: 100%
          position: absolute
          left: 50%
          top: 10%
          transform translateX(-50%)
          .cd
            width 100%
            height 100%
            box-sizing border-box
            border: 10px solid rgba(255, 255, 255, 0.1)
            border-radius 50%
            overflow hidden
            img 
              border-radius 50%
              animation: rotate 20s linear infinite
      .middle-r
        width 100%
        height 100%
    .bottom
        position: absolute
        bottom: 50px
        width: 100%
        .dot-wrapper
          text-align: center
          font-size: 0
  .mini-player
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #ccc;
    z-index: 100;
  @keyframes rotate
    0%
      transform: rotate(0)
    100%
      transform: rotate(360deg)
</style>