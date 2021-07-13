<!-- Please remove this file from your project -->
<template>
  <div>
    <b-modal id="reserve_popup" title="BootstrapVue">
      <template #modal-header="{ close }">
        <h5>{{ stall !== null ? stall.name : '' }}</h5>
      </template>
      <img width="200" :src=" stall !== null ? stall.image : '' ">
      <p class="my-4">{{ stall !== null ? stall.description : ''}}</p>
      <p class="my-4">Price: {{stall !== null ? stall.price : ''}}</p>

      <hr>

      <h5>Please fill the below details</h5><br>

      <div class="form-group">
        <label for="exampleFormControlInput1">Company name:</label>
        <input type="text" v-model="company_name" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Company logo:</label>
        <input type="file" @change="onFileChange" accept="image/*" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
      </div>

      <div class="form-group">
        <label for="exampleFormControlInput1">Contact Details:</label>
        <textarea v-model="contact_details" class="form-control"></textarea>
      </div>

      <template #modal-footer="{ ok, cancel, hide }">
        <button @click="makeReservation" class="btn btn-success">Confirm Reservation</button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ReservePopup",
  props:{
    stall: Object
  },

  data() {
    return {
      company_name: null,
      company_logo: null,
      company_logo_blob: null,
      contact_details: null,
    };
  },

  methods:{
    onFileChange(e) {
      const file = e.target.files[0]
      this.company_logo = file
      this.company_logo_blob = URL.createObjectURL(file)
    },

    async makeReservation(){
      const payload = {
        company_name:this.company_name,
        company_logo:this.company_logo_blob,
        contact_details:this.contact_details,
        event_id: this.stall.event_id,
        stall_id: this.stall.id,
      }
      const response = await this.$store.dispatch("booking/bookStall", payload);
      console.log(response)
    }
  }
}
</script>
