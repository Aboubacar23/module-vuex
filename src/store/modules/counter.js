import { SET_COUNTER, GET_COUNTER, DE_SET_COUNTER, DE_GET_COUNTER } from "../../store/mutation-types";
export const counter = {
    state: {
        counter: 0,
    },
    mutations: {
        [SET_COUNTER]: state => state.counter++,
        [DE_SET_COUNTER]: state => state.counter--

    },
    actions: {
        [SET_COUNTER]: ({ commit }) => commit(SET_COUNTER),
        [DE_SET_COUNTER]: ({ commit }) => commit(DE_SET_COUNTER)
    },

    getters: {
        [GET_COUNTER]: state => state.counter,
        [DE_GET_COUNTER]: state => state.counter
    },

};