
<template>
  <p>{{store.state.count}}</p>
  <p>{{aa}}</p>
  <button @click="add">+</button>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'
const store = useStore()
function add() {
  store.commit('increment')
}
const aa = computed(() => store.state.count)
</script>