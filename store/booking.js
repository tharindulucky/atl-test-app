import Vuex from 'vuex'

const state = () => ({
  token: null
});

const getters = {

};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {


  setToken ({ rootState }) {

    let token = rootState.users.token
    return token;

  },



}

export default {
  state,
  actions,
  mutations,
  getters
}
