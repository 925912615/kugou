import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
  strict: true,
  state: {
    xinge: [],
    paihang: []
  },
  mutations: {
    appendXinge(state,arg){
      state.xinge=arg;
    },
    appendPaihang(state,arg){
      state.paihang=arg;
    }
  },
  actions: {
    async loadXinge({state, commit},arg){
      let data=await (await fetch('http://localhost:2020/xinge')).json();
      commit('appendXinge',data);
    },
    async loadPaihang({commit}, arg){
      let data=await (await fetch('http://localhost:2020/paihang')).json();
      commit('appendPaihang',data.rank.list);
    }
  },
  getters: {
    xinge(state){
       if(state.xinge.length == 0){
        store.dispatch('loadXinge');
       }
      return state.xinge;
    },
    paihang(state){
       if(state.paihang.length == 0){
        store.dispatch('loadPaihang');
       }
      return state.paihang;
    },
  }
})
export default store;
