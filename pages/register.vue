<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col-md-6 mx-auto">
        <h4>Please register here</h4>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" v-model="name" placeholder="Enter name" required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" v-model="email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" v-model="password" id="exampleInputPassword1" placeholder="Password" required>
          </div>
          <button type="button" class="btn btn-primary" @click="register">Submit</button>
        </form>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

import { required } from 'vuelidate'

export default {
  name: "ReservePopup",
  props:{
    stall: Object
  },

  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },

  validations: {
    name: {
      required
    },
    email: {
      required
    },
    password: {
      required
    }
  },

  methods:{

    async register(){
      const payload = {
        name:this.name,
        email:this.email,
        password:this.password,
      }
      const response = await this.$store.dispatch("user/register", payload);
      if(response !== null){
        this.$router.push('/login')
      }
    }
  }
}
</script>
