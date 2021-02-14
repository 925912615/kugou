import * as types from './mutation-type'
import { playMode } from 'common/js/config'

export const selectPlay = function({commit,getters},{list,index,song}) {
  commit(types.SET_SEQUENCE_LIST,list)
  commit(types.SET_PLAYLIST,list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
  commit(types.SET_PLAYING_ONE,song)
  console.log(getters.playing_one);
}