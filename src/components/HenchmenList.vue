<template>
  <div id="henchmen-list">
    <b-list-group flush>
      <b-list-group-item href="#" v-for="(henchman, i) in henchmen" v-bind:key="henchman.name" v-on:click="getID(i)" :class="{'active': activeItem === i}">
        <img width="26" height="26" style="margin-right: 2vh;" src="../assets/icons/froggo-displayimg.png">{{ henchman.name }}
      </b-list-group-item>

      <label class="mt-4"><h6>Chat Options:</h6></label>
      <b-button class="mt-1 mb-3" v-on:click="nudgeAll()">Nudge All Froggos</b-button>
      <b-button class="mt-1 mb-4" v-on:click="clearAll()">Clear All Convos</b-button>

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

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";

label {
  color: $label;
}

.list-group-flush .list-group-item {
  border-radius: 5px !important;
}

.list-group-item.active {
  background-color: $primary !important;
  border: white;
}

.btn-secondary {
  background-color: $primary !important;
  border: none;

  :hover {
    background-color: $primary-hover !important;
  }
}
</style>
