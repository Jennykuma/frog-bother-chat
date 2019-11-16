<template>
  <div id="henchmen-list">
    <label><h6>Henchmen List:</h6></label>
    <b-list-group flush>
      <b-list-group-item href="#" v-for="(henchman, i) in henchmen" :key="henchman.name" :class="{'active': activeFrog === i}" @click="getFrogID(i)">
        <img width="26" height="26" style="margin-right: 2vh;" src="../assets/icons/froggo-displayimg.png">{{ henchman.name }}
      </b-list-group-item>
      
      <label class="mt-4"><h6>Chat Options:</h6></label>
      <b-button class="mt-1" @click="nudgeAll()">Nudge All Froggos</b-button>
      <b-button class="mt-3 mb-3" @click="clearAll()">Clear All Convos</b-button>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'henchmen-list',
  props: {
    henchmen: {
      type: Array
    }
  },
  data() {
    return {
      activeFrog: 0
    }
  },
  methods: {
    getFrogID(i) {
      this.activeFrog = i;
      this.$emit('clicked-frog', i) // i is the index of the frog selected
    },
    nudgeAll() {
      this.$emit('clicked-nudge-all');
    },
    clearAll() {
      this.$emit('clicked-clear-all');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_main.scss";
</style>
