import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store=new Vuex.Store({
  strict: true,
  state: {
    xinge: [],
    paihang: [],
    gedan: []
  },
  mutations: {
    appendXinge(state, arg){
      state.xinge=arg;
    },
    appendPaihang(state, arg){
      state.paihang=arg;
    },
    appendGedan(state, arg){
      state.gedan=arg;
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
    },
    async loadGedan({commit}, arg){
      let data=await (await fetch('http://localhost:2020/gedan')).json();
      commit('appendGedan',data.plist.list.info);
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
    gedan(state){
      if(state.gedan.length == 0){
        store.dispatch('loadGedan');
      }
      return state.gedan
    }
  }
})
export default store;
