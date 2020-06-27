<template>
<div class="paihang">
  <div
    v-for="item in paihang"
    :key="item.id"
    @click="selectItem(item)">
    <mt-cell :title="item.rankname">
      <img slot="icon" :src="item.imgurl|imgurl" width="100" height="100">
    </mt-cell>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'paihang',
  data(){
    return{
    }
  },
  methods: {
    selectItem(item){
      this.$router.push(`/paihang/${item.rankid}`);
    }
  },
  computed: {
    paihang(){
      return this.$store.getters.paihang;
    }
  }
}
</script>

<style lang="stylus" scoped>
.paihang
  color: black;
  .mint-cell-title
    img
      padding: 10px;
</style>
