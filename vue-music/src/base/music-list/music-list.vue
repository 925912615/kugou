<template>
  <div class="wrap">
    <mt-cell
      @click.native="getPlayDetail(song,index)"
      v-for="(song,index) in songs"
      :key="song.audio_id"
      :title="song.filename"
      :value="song.extname">
    </mt-cell>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'music-list',
  props:{
    songs: {
      type: Array,
      default: []
    }
  },
  methods: {
    async getPlayDetail(song,index) {
      const { data: res } = await this.$axios.get("http://localhost:2020/play/getdata", {
        params: {
          hash: song.hash,
        },
      });
      this.selectPlay({
        list: this.songs,
        index,
        song: res.data
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  },
}
</script>

<style lang="stylus" scoped>
.wrap
  width: 100%
  height: 65%
  overflow-y: scroll;
</style>
