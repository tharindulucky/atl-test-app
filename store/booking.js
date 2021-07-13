const state = () => ({

});

const getters = {

};

const mutations = {

};

const actions = {
  async bookStall({commit}, payload){
    try {
      return await this.$axios.$post(`/events/`+payload.event_id+`/stalls/`+payload.stall_id+`/book`);
    } catch (e) {
      return e;
    }
  },

}

export default {
  state,
  actions,
  mutations,
  getters
}
