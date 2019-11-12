<template>
  <div id="app">
    <b-container fluid>
      <NavBar />
      <b-row>
        <b-col sm="3">
          <label style="margin-left: 2vh;"> Henchmen: </label>
          <HenchmenList v-bind:henchmen="henchmen" @clicked="setClickedID"/>
        </b-col>
        <b-col sm="9">
          <label> Chat Log: </label>
          <ConvoLog v-bind:henchmanID="this.clickedID" v-bind:henchmenMessages="henchmen[this.clickedID].messages"/>
        </b-col>
      </b-row>
      <b-row align-h="end">
        <b-col sm="9" class="mt-5">
          <b-form inline @submit.prevent="handleSubmit(event)">
            <b-input id="message-input" v-model="message"></b-input>
            <b-button id="message-input-btn" type="submit">Ribbit</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HenchmenList from './components/HenchmenList.vue'
import ConvoLog from './components/ConvoLog.vue'
import henchmenData from './assets/data/messages.json'

export default {
  name: 'app',
  components: {
    NavBar,
    HenchmenList,
    ConvoLog
  },
  data() {
    return {
      clickedID: 0,
      message: '',
      timestamp: '',
      henchmen: [],
    }
  },
  created() {
    if(localStorage.getItem("henchmenData") === null) {
      this.henchmen = henchmenData.data;
      localStorage.setItem('henchmenData', JSON.stringify(henchmenData));
    } else {
      var retrievedJSON = localStorage.getItem('henchmenData');
      var parsedObject = JSON.parse(retrievedJSON);
      this.henchmen = parsedObject;
    }
  },
  updated() {
    this.scroll(); // When data is updated, scroll to the bottom
  },
  methods: {
    setClickedID(id) {
      this.clickedID = id;
    },
    handleSubmit(event) {
      if(this.message != '') {
        this.henchmen[this.clickedID].messages.push({ timestamp: new Date().toISOString().slice(0,10), message: this.message});
        this.saveFile();
        this.message = '';
        event.target.reset();
        this.scrollToBottom();
      } else {
        event.target.reset();
        this.scrollToBottom();
      }
    },
    scroll() {
      document.getElementById('convo-log').scrollTop = document.getElementById('convo-log').scrollHeight;
    },
    saveFile() {
      const data = JSON.stringify(this.henchmen);
      localStorage.setItem('henchmenData', data);
    }
  }
}
</script>

<style>
#app {
  background-color: white;
  border-color: #8FB339;
  border-style: solid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 9vh;
  padding: 3vh;
}

#message-input {
  width: 90%;
}

#message-input-btn {
  margin-left: 3%;
  border-color: rgba(0, 0, 0, 0.16);
  background-color: #8FB339;
}
</style>
