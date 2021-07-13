<!-- Please remove this file from your project -->
<template>
  <div>
    <b-modal id="event_popup" title="BootstrapVue">
      <template #modal-header="{ close }">
        <h5>{{event.title}}</h5>
      </template>
      <p class="my-4">{{ event !== null ? event.description : ''}}</p>
      <p class="my-4">Location: {{event !== null ? event.location : ''}}</p>
      <p class="my-4">Event starts at: {{ event !== null ? event.start_date : ''}}</p>
      <p class="my-4">Event ends at: {{ event !== null ? event.end_date : ''}}</p>
      <template #modal-footer="{ ok, cancel, hide }">
        <NuxtLink :to="`/events/`+event.id">
          <button class="btn btn-success">Book Your Place</button>
        </NuxtLink>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "EventPopup",
  props:{
    event: Object
  }
}
</script>
