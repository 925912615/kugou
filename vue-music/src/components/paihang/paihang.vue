<template>
<div class="paihang">
  <div
    v-for="item in dataList"
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
      dataList: []
    }
  },
  mounted(){
    this.getData()
  },
  methods: {
    selectItem(item){
      this.$router.push(`/paihang/${item.rankid}`);
    },
    async getData(){
      const { data: res } = await this.$axios.get('http://localhost:2020/paihang');
      this.dataList = res.rank.list;
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
.mint-cell-title
  img
    padding: 10px;
</style>
