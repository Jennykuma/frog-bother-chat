<template>
  <div id="app">
    <b-container fluid>
      <NavBar />

      <b-row>
        <b-col sm="3">
          <HenchmenList :henchmen="henchmen" @clicked-frog="setClickedID" @clicked-nudge-all="nudgeAll" @clicked-clear-all="clearAll"/>
        </b-col>
        
        <b-col sm="9">
          <ChatLog :henchman-ID="this.clickedID" :henchmen-messages="henchmen[this.clickedID].messages" @clicked-clear-convo="clearConvo"/>
        </b-col>
      </b-row>

      <b-row align-h="end" class="mt-2">
        <b-col sm="9">
          <ChatBar ref="chatBar" :message="this.message" :max-length="this.maxLength" @on-submit-message="handleSubmit" @clicked-emoji="handleSubmit"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HenchmenList from './components/HenchmenList.vue'
import ChatLog from './components/ChatLog.vue'
import ChatBar from './components/ChatBar.vue'
import henchmenData from './assets/data/messages2.json'
import ribbitSound from './assets/audio/ribbit.mp3'
import nudgeSound from './assets/audio/nudge.mp3'

export default {
  name: 'app',
  components: {
    NavBar,
    HenchmenList,
    ChatLog,
    ChatBar,
  },
  data() {
    return {
      maxLength: 100,
      clickedID: 0,
      message: '',
      timestamp: '',
      henchmen: [],
    }
  },
  created() {
    // Local storage deals with storing our messages + pulling them up to view on page reload
    if(localStorage.getItem("henchmenData") == null) {
      this.henchmen = henchmenData.data;
      localStorage.setItem('henchmenData', JSON.stringify(henchmenData.data));
    } else {
      this.henchmen = henchmenData.data;
      var retrievedJSON = localStorage.getItem('henchmenData');
      var parsedObject = JSON.parse(retrievedJSON);
      this.henchmen = parsedObject;
    }
  },
  updated() {
    this.scroll(); // When data is updated, scroll to the bottom
    this.$refs.chatBar.$refs.input.focus(); // Always focus on the input element
  },
  methods: {
    setClickedID(id) {
      this.clickedID = id; // ClickedID = id of btn that was clicked
    },
    handleSubmit(message, event) {
      var containsAllWhitespace = this.checkWhitespace(message); // check for whitespace in messages
      this.message = message;
      if(this.message != '' && !containsAllWhitespace) { // Message is not empty & not full of whitespace

        var ribbit = new Audio(ribbitSound);
        ribbit.play();

        // We don't want any of that JavaScript <script> injection / XSS stuff in here
        let regex = /<[^>]*>/g;
        if (regex.test(this.message)) {
          this.message = this.message.replace(regex, "") + " **String censored due to malicious input**";
        }

        this.henchmen[this.clickedID].messages.push({ timestamp: new Date().toISOString().slice(0,10), message: this.message});
        this.saveFile();
        this.message = '';
        event.target.reset();
        this.scrollToBottom();
      } else { // Message is empty
        this.message = '';
        event.target.reset();
      }
    },
    nudgeAll() {
      var nudge = new Audio(nudgeSound);
      nudge.play();
      
      for(let henchmenIdx = 0; henchmenIdx < this.henchmen.length; henchmenIdx++) {
        this.henchmen[henchmenIdx].messages.push({ timestamp: new Date().toISOString().slice(0,10), message: "**!! NUDGE !!**"});
      }
      this.saveFile();
      this.scrollToBottom();
    },
    clearAll() {
      localStorage.clear();
      for(let henchmenIdx = 0; henchmenIdx < this.henchmen.length; henchmenIdx++) {
        this.henchmen[henchmenIdx].messages = [];
      }
      this.saveFile();
    },
    clearConvo() {
      this.henchmen[this.clickedID].messages = [];
      this.saveFile();
    },
    checkWhitespace(message) {
      return message.match(/^\s+/) === null ? false : true;
    },
    scroll() { 
      document.getElementById('chat-log').scrollTop = document.getElementById('chat-log').scrollHeight;
    },
    saveFile() {
      const data = JSON.stringify(this.henchmen);
      localStorage.setItem('henchmenData', data);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";
</style>
