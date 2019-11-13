<template>
  <div id="henchmen-list">
    <b-list-group flush>
      <b-list-group-item href="#" v-for="(henchman, i) in henchmen" v-bind:key="henchman.name" v-on:click="getID(i)" :class="{'active': activeItem === i}">
        <img width="26" height="26" style="margin-right: 2vh;" src="../assets/icons/froggo-displayimg.png">{{ henchman.name }}
      </b-list-group-item>

      <b-button class="mt-4 mb-3" v-on:click="nudgeAll()">Alert All</b-button>
      <b-button class="mt-1 mb-4" v-on:click="clearAll()">Clear All</b-button>

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
      activeItem: 0
    }
  },
  methods: {
    getID(i) {
      this.activeItem = i;
      this.$emit('clicked',i) // i is index of v-for
    },
    nudgeAll() {
      this.$emit('nudged');
    },
    clearAll() {
      this.$emit('cleared');
    }
  }
}
</script>

<style>
#henchmen-list {
  color: #8FB339;
}

.list-group-flush .list-group-item {
  border-radius: 5px !important;
}

.list-group-item.active {
  background-color: #8FB339 !important;
  border: white;
}

.b-button {
  color: #333333;
}
</style>
