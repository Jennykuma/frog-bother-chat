<template>
  <div id="henchmen-list">
    <b-list-group flush>
      <b-list-group-item href="#" v-for="(henchman, i) in henchmen" v-bind:key="henchman.name" v-on:click="getID(i)" :class="{'active': activeItem === i}">
        {{ henchman.name }}
      </b-list-group-item>
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
    }
  }
}
</script>

<style>
#henchmen-list {
  color: #8FB339;
}

.list-group-item.active {
  background-color: #8FB339 !important;
  border: white;
}
</style>
