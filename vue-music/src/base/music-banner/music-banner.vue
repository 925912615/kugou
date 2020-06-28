<template>
  <div class="banner">
    <mt-header fixed :title="title">
      <router-link :to="back" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="banner-img">
      <img v-if="bannerImgUrl" :src="bannerImgUrl|imgurl"/>
      <span v-if="bannerTime" class="banner-info">更新时间: {{addtime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'music-banner',
  props: {
    title: {
      type: String,
      default: ''
    },
    bannerImgUrl: {
      type: String,
      default: ''
    },
    bannerTime: {
      type: Boolean,
      default: false
    },
    addtime: {
      type: String,
      default: ""
    },
    back: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~common/stylus/variable"
.banner
  width: 100%
  height: 35%
.mint-header.is-fixed
  background: $color-background-d
.banner-img
  position: relative;
  width: 100%
  height: 100%;
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
</style>
