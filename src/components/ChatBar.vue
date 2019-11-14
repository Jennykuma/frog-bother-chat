<template>
  <div id="chat-bar">
    <b-form inline @submit.prevent="handleSubmit(event)">
      <b-input style="width: 87%;" id="message-input" v-model="message" :maxlength="maxLength"></b-input>
      <b-badge class="ml-2 mr-2" v-text="(maxLength - message.length)" variant="light"></b-badge>
      <b-button class="ml-0" id="message-input-btn" type="submit">Ribbit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'chat-bar',
  props: {
    message: String,
    maxLength: Number
  },
  methods: {
    handleSubmit() {
      this.$emit('onSubmitMessage', this.message, event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

#message-input {
  width: 90%;
}

#message-input-btn {
  border-color: rgba(0, 0, 0, 0.16);
  background-color: $primary;
  width: 9%;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  #message-input-btn {
    margin-top: 3vh;
    width: 100%;
  }
}
</style>