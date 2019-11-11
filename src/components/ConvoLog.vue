<template>
  <div id="convo-log">
    <b-list-group flush>
      <b-list-group-item v-for="(msg, i) in henchmenMessages" v-bind:key="msg">
        <i>{{ henchmenMessages[i].timestamp }}</i>
        <br />
        <strong>Vito: </strong> {{ henchmenMessages[i].message }}
      </b-list-group-item>
    </b-list-group>

  </div>
</template>

<script>
export default {
  name: 'convo-log',
  props: {
    henchmanID: Number,
    henchmenMessages: Array
  },
  data() {
    return {
      
    }
  }
}
</script>

<style>
#convo-log {
  height: 50vh;
  overflow-y: auto;
  
  border-color: #8FB339;
  border-style: solid;

}
</style>
