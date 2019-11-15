<template>
  <div id="chat-bar">
      <label><h6>Emojis: </h6></label>
      <div class="emoji" v-for="emoji in emojiList" :key="emoji">
        <div class="noSelect" @click="addEmoji(emoji)">{{ emoji }}</div>
    </div>
    <b-form inline @submit.prevent="handleSubmit(event)">
      <b-input style="width: 87%;" id="message-input" ref="input" autofocus=true v-model="message" :maxlength="maxLength"></b-input>
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
  data() {
    return {
      emojiList: ['🐸', '🚬', '🐴', '🔫', '🐟', '🤵', '👥', '😠']
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('on-submit-message', this.message, event);
    },
    addEmoji(emoji) {
      this.$emit('clicked-emoji', emoji, event);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";
</style>