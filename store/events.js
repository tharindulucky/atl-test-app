const state = () => ({
  events: [],
  event: null,
});

const getters = {
  getEvents(state){
    return state.events;
  },

  getEvent(state){
    return state.event;
  }
};

const mutations = {
  setEvents(state, events){
    state.events = events;
  },
  setEvent(state, events){
    state.event = events;
  }
};

const actions = {
  async loadEvents({commit}){
    try {
      const {data} = await this.$axios.$get(`/events`);
      commit('setEvents', data);
    } catch (e) {
      //this.$toast.error('Something went wrong, Try again later', {icon: "error"});
    }
  },

  async loadEvent({commit}, id){
    try {
      const {data} = await this.$axios.$get(`/events/`+id);
      commit('setEvent', data);
    } catch (e) {
      //this.$toast.error('Something went wrong, Try again later', {icon: "error"});
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
