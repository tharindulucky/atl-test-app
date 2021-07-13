<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div id="map-wrap" style="height: 100vh">
      <no-ssr>
        <l-map :zoom=13 :center="[6.901966123343937,79.87339605530008]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker v-for="saved_event in events" @click="openEventPopup(saved_event)" :key="saved_event.id" :lat-lng="[saved_event.long,saved_event.latt]"></l-marker>
        </l-map>
      </no-ssr>
    </div>
    <EventPopup :event="selected_event"></EventPopup>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import {EventPopup} from './EventPopup'

export default {
  name: "Map",

  data() {
    return {
      selected_event: null
    };
  },

  computed: {
    ...mapGetters({
      events: "events/getEvents"
    }),
  },

  async mounted() {
    await this.getEvents();
  },

  methods: {
    async getEvents() {
      await this.$store.dispatch("events/loadEvents");
    },

    openEventPopup(event){
      this.selected_event = event;
      this.$bvModal.show("event_popup");
    }
  }


}
</script>
