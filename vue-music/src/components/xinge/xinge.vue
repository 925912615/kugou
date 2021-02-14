<template>
  <div class="xinge">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in banner" :key="item.id">
          <img :title="item.title" :src="item.imgurl" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <mt-cell
      v-for="(singer,index) in singer_list"
      :key="singer.audio_id"
      :title="singer.filename | length10"
      :value="singer.audio_id"
      @click.native="getPlayDetail(singer,index)"
    ></mt-cell>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "xinge",
  data() {
    return {
      banner: [],
      singer_list: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: res } = await this.$axios.get('http://localhost:2020/xinge');
      this.banner = res.banner;
      this.singer_list = res.data;
    },
    async getPlayDetail(song,index) {
      console.log(song,"song");
      const { data: res } = await this.$axios.get("http://localhost:2020/play/getdata", {
        params: {
          hash: song.hash,
        },
      });
      this.selectPlay({
        list: this.singer_list,
        index,
        song: res.data
      })
    },
    ...mapActions([
      'selectPlay'
    ])
  },
};
</script>

<style lang="stylus" scoped>
.xinge {
  color: white;

  .swiper {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .mint-cell {
    color: black;
  }
}
</style>
