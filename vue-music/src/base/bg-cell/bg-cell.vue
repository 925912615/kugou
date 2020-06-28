<template>
  <div class="wrap">
    <div class="wrap-left">
      <slot name="img"></slot>
    </div>
    <div class="wrap-content">
      <div class="wrap-content-title">{{title}}</div>
      <div v-if="label!==''" class="wrap-content-label iconfont icon-all">{{label}}</div>
    </div>
    <div v-if="icon==true" class="wrap-right">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bg-cell',
  props: {
    title: {
      type: String,
      default: ''
    },
    label: {
      type: Number,
      default: ''
    },
    icon: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
.wrap-left
  flex: 0 0 100px;
.wrap-content
  flex: 1 1 auto;
  padding: 10px;
  .wrap-content-title
    margin-bottom: 5px;
  .wrap-content-label
    color: #aaa;
    font-size: 14px;
    font-weight: 400;
.wrap-right
  width: 50px;
  flex: 0 0 50px;
</style>
