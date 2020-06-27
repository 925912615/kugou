<template>
  <div id="app">
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tabbar from 'base/tab/tab'
export default {
  name: 'app',
  data(){
    return{
      // selected: ''
    }
  },
  created(){
  },
  components: {
    MHeader,
    Tabbar
  },
  computed:{
    selected(){
      console.log(this.$router.path);
      return this.$router.path
    }
	}
}
</script>

<style lang="stylus" scoped>
#app
  padding-top: 40px;
  padding-bottom: 55px;
</style>
