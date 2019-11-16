<template>
  <div id="chat-box">
    <label><h6>Chat Log:</h6></label>
    <b-button pill size="sm" class="ml-2" @click="clearConvo()"> Clear </b-button>
    <div id="chat-log">
      <p v-for="(msg, i) in henchmenMessages" v-bind:key="msg">
        <i>{{ henchmenMessages[i].timestamp }}</i>
        <br />
        <img width="20" height="20" class="mr-2" src="../assets/icons/vito-displayimg.png"><strong>Vito: </strong> {{ henchmenMessages[i].message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-log',
  props: {
    henchmanID: Number,
    henchmenMessages: Array
  },
  methods: {
    clearConvo() {
      this.$emit('clicked-clear-convo');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";
</style>
