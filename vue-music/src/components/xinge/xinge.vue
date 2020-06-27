<template>
<div class="xinge">
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in _xinge.banner" :key="item.id"><img :title="item.title" :src="item.imgurl"></mt-swipe-item>
    </mt-swipe>
  </div>
  <mt-cell v-for="singer in _xinge.data" :key="singer.audio_id" :title="singer.filename | length10" :value="singer.audio_id"></mt-cell>
</div>
</template>

<script>
export default {
  name: 'xinge',
  data(){
    return{
    }
  },
  async mounted(){
  },
  methods: {
  },
  computed: {
    _xinge(){
      return this.$store.getters.xinge;
    }
  }
}
</script>

<style lang="stylus" scoped>
.xinge
  color: white
  .swiper
    height: 200px;
    img
      width: 100%;
      height: 100%;
  .mint-cell
    color: black;
</style>
