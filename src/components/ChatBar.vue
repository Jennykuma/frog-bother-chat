<template>
  <div id="chat-bar">
    <label><h6>Emojis: </h6></label>
    <div class="emoji" v-for="emoji in emojiList" :key="emoji">
      <div class="noSelect" @click="addEmoji(emoji)">{{ emoji }}</div>
    </div>
    <b-form @submit.prevent="handleSubmit()">
      <div class="d-flex bd-highlight">
        <div class="flex-grow-1 bd-highlight"><b-input id="message-input" ref="input" autofocus=true v-model="message" :maxlength="maxLength"></b-input></div>
        <div class="ml-1 mr-1 bd-highlight"><b-badge v-text="(maxLength - message.length)" variant="light"></b-badge></div>
        <div class="bd-highlight"><b-button id="message-input-btn" type="submit">Ribbit</b-button></div>
      </div>
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
  data() {
    return {
      emojiList: ['🐸', '🚬', '🐴', '🔫', '🐟', '🤵']
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('on-submit-message', this.message);
    },
    addEmoji(emoji) {
      this.$emit('clicked-emoji', emoji);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";
</style>