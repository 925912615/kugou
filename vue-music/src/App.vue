<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <transition :name="swiper">
        <router-view></router-view>
      </transition>
    </keep-alive>
    <Tabbar></Tabbar>
    <Player></Player>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tabbar from 'base/tab/tab'
import Player from 'components/player/player'

export default {
  name: 'app',
  data(){
    return{
      swiper: "right",
    }
  },
  created(){
  },
  components: {
    MHeader,
    Tabbar,
    Player
  },
  computed:{
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.swiper = "right";

        this.$router.isBack = false;
      } else {
        this.swiper = "left";

        this.$router.isBack = true;
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
#app
  padding-top: 40px;
  padding-bottom: 55px;
  
.left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.left-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.right-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute;
}

.left-enter-active,
.right-enter-active {
  transition: all 0.5s ease;
}
</style>
