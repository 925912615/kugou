<template>
  <div class="wrap">
    <mt-cell
      v-for="song in songs"
      :key="song.audio_id"
      :title="song.filename"
      :value="song.extname">
    </mt-cell>
  </div>
</template>

<script>
export default {
  name: 'music-list',
  props:{
    songs: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  width: 100%
  height: 65%
  overflow-y: scroll;
</style>
