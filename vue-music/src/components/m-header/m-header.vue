<template>
<div class="m-header">
  <mt-header fixed :title="this.$route.meta.title">
    <router-link to="/" slot="left">
      <mt-button v-if="this.$route.meta.back" icon="back">返回</mt-button>
    </router-link>
  </mt-header>
</div>
</template>

<script>
export default {
  name: 'm-header',
  data(){
    return{
      path: '/'
    }
  },
  methods:{
  },
  watch:{
  }
}
</script>

<style lang="stylus" scoped>
</style>
