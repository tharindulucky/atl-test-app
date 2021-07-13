<!-- Please remove this file from your project -->
<template>
  <div>
    <b-modal id="reminder_popup" title="BootstrapVue">
      <template #modal-header="{ close }">
        <h5>Welcome!</h5>
      </template>

      <p>Please Login to Continue!</p>

      <template #modal-footer="{ ok, cancel, hide }">
        <NuxtLink :to="`/login`">
          <button class="btn btn-success">Login</button>
        </NuxtLink>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "LoginReminder",
}
</script>
