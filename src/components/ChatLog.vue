<template>
  <div id="chat-box">
    <label><h6>Chat Log:</h6></label>
    <b-button pill size="sm" class="ml-2" @click="clearConvo()"> Clear </b-button>
    <div id="chat-log">
      <b-list-group flush>
        <b-list-group-item v-for="(msg, i) in henchmenMessages" v-bind:key="msg">
          <i>{{ henchmenMessages[i].timestamp }}</i>
          <br />
          <strong>Vito Croakleone: </strong> {{ henchmenMessages[i].message }}
        </b-list-group-item>
      </b-list-group>
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
