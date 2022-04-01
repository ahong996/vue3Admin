<template>
  <p class="aa fontSize">{{store.state.count}}</p>
  <p>{{aa}}</p>
  <button @click="add">+</button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
function add() {
  store.commit('increment');
}
const aa = computed(() => store.state.count);
</script>

<style lang="stylus">
  @import '../assets/stylus/base.styl'
  .aa.fontSize {
    color: yellow;
  }
</style>
