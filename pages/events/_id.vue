<template>
  <div>
    <h4>{{ single_event !== null ? single_event.title : ''}}</h4>
    <p class="my-4">Location: {{single_event !== null ? single_event.description : ''}}</p>
    <p class="my-4">Location: {{single_event !== null ? single_event.location : ''}}</p>
    <p class="my-4">Event starts at: {{ single_event !== null ? single_event.start_date : ''}}</p>
    <p class="my-4">Event ends at: {{ single_event !== null ? single_event.end_date : ''}}</p>


    <h5>Available Stalls:</h5>

    <div class="container">
      <div class="card-group">

        <!--bootstrap card with 3 horizontal images-->
        <div class="row" v-if="single_event !== null">
          <div class="card col-md-3" v-for="stall in single_event.get_stalls_rel" :key="stall.id">
            <img :src="stall.image">
            <div class="card-body">
              <h3 class="card-title">{{stall.name}}</h3>
              <p class="card-text">{{stall.description}}</p>
              <p class="card-text">{{stall.price}} LKR</p>
              <button @click="openReservePopup(stall)" class="btn btn-success">Reserve</button>
            </div>
          </div>
        </div>
      </div>
    </div>
{{selected_stall}}
    <ReservePopup :stall="selected_stall"></ReservePopup>

  </div>
</template>

<script>

import { mapGetters } from "vuex";
import {ReservePopup} from '../../components/ReservePopup'

export default {
  name: "Map",

  data() {
    return {
      selected_stall: null
    };
  },

  computed: {
    ...mapGetters({
      single_event: "events/getEvent"
    }),
  },

  async mounted() {
    await this.getEvent();
  },

  methods: {
    async getEvent() {
      await this.$store.dispatch("events/loadEvent", this.$route.params.id);
    },

    openReservePopup(stall){
      this.selected_stall = stall;
      this.$bvModal.show("reserve_popup");
    }
  }


}
</script>
