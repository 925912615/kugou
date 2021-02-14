import { playMode } from 'common/js/config'

const state = {
  playing: false,
  fullScreen: false,
  mode: playMode.sequence,
  playlist: [],
  sequenceList: [],
  currentIndex: -1,
  playing_one: []
}

export default state