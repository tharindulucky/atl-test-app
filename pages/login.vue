<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <h4>Please login here</h4>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="button" @click="login" class="btn btn-primary">Submit</button>
            <NuxtLink :to="`/register`">
              <button class="btn btn-success">Register</button>
            </NuxtLink>
          </form>
        </div>



      </div>
    </div>
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
      email: null,
      password: null,
    };
  },

  methods:{

    async login(){
      const payload = {
        email:this.email,
        password:this.password,
      }
      const response = await this.$store.dispatch("user/login", payload);
      if(response !== null){
        this.$router.push('/')
      }
    }
  }
}
</script>
