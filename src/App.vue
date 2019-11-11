<template>
  <div id="app">
    <b-container fluid>
      <NavBar />
      <b-row>
        <b-col cols="3">
          <label style="margin-left: 2vh;"> Henchmen: </label>
          <HenchmenList v-bind:henchmen="henchmen" @clicked="setClickedID"/>
        </b-col>
        <b-col cols="9">
          <label> Chat Log: </label>
          <ConvoLog v-bind:henchmanID="this.clickedID" v-bind:henchmenMessages="henchmen[this.clickedID].messages"/>
        </b-col>
      </b-row>
      <b-row align-h="end">
        <b-col cols="9">
        <b-form inline @submit.prevent="handleSubmit(event)">
          <b-input id="message-input" v-model="message"></b-input>
          <b-button id="message-input-btn">Ribbit</b-button>
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
      henchmen: [
        { 
          userId: '',
          id: 0,
          name: 'Sonny',
          messages: [
            {
              timestamp: '1971-01-01',
              message: 'Froggos have a little joke, that the world is so hard a man must have two fathers to look after him, and that\'s why they have God Froggers'
            },
            {
              timestamp: '2001-03-03',
              message: 'I\'ll make him an offer he can\'t refuse.'
            },
            {
              timestamp: '2019-08-20',
              message: 'The froggo with the long tongue can steal more fies than the man with the gun'
            }
          ]
        },
        { 
          id: 1, 
          name: 'Fredo', 
          messages: [
            {
              timestamp: '2019-11-10',
              message: 'A man who doesn\'t spend time with his family can never be a real man.'
            }
          ] 
        },
        { 
          id: 2, 
          name: 'Michael', 
          messages: [
            {
              timestamp: '1971-01-01',
              message: 'I guess just wasn\'t enough time, Michael. Just wasn\'t enough time.'
            }
          ] 
        },
        { 
          id: 3, 
          name: 'Jenny', 
          messages: [
            {
              timestamp: '2019-11-10',
              message: 'It\'s an old ribbit. I spent my life trying not to be careless -- frogettes and tadpoles can be careless, but not froggos.'
            }
          ] 
        }
      ]
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
    }
  }
}
</script>

<style>
#app {
  background-color: white;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  border-color: #8FB339;
  border-style: solid;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  margin: 10vh;
  padding: 3vh;

  height: 80vh;
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
