import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
var state = {
    count: 10
}
const mutations = {
    increment(state) {
        state.count++;
    },
    deletediv(state) {
        state.count--;
    }
}
const actions = {
    increment: ({//处理你想要什么  ，异步请求，判断 流程控制
                    commit
                }) => {
        commit('increment');
    },
    deletediv: ({//处理你想要什么  ，异步请求，判断 流程控制
                    commit
                }) => {
        commit('deletediv');
    }
}
const getters = {
    count(state) {
        return state.count
    }
}
export default new Vuex.Store({
    actions,
    state,
    mutations,
    getters
});
