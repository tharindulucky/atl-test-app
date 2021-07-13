const state = () => ({
  token: null,
  user: {}
});

const getters = {
  get_token(state){
    return state.token;
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERDATA: (state, user) => {
    state.user = user;
  }
};

const actions = {
  async register({commit}, payload){
    try {
      return await this.$axios.$post(`/register/`,payload);
    } catch (e) {
      return e;
    }
  },

  async login({commit}, payload){
    try {
      const response = await this.$axios.$post(`/login/`,payload);
      commit("SET_TOKEN", response.access_token);
      commit("SET_USERDATA", response.user);

      localStorage.setItem("token", response.access_token);
      localStorage.setItem("tokenExpiration", new Date().getTime() + 3600 * 1000);
      localStorage.setItem("user",JSON.stringify(response.user) );

      return response;
    } catch (e) {
      return e;
    }
  },

  async bookStall({commit,rootState }, payload){
    try {

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+ rootState.user.token
      };

      return await this.$axios.$post(`/events/`+payload.event_id+`/stalls/`+payload.stall_id+`/book`, {
        company_name:payload.company_name,
        company_logo:payload.company_logo,
        contact_details:payload.contact_details,
      },{
        headers: headers
      });
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
