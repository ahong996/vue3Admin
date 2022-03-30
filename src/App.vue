
<template>
  <el-button @click="loadajax">Default</el-button>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import { getlogin } from '@/api'
import HelloWorld from '@/components/HelloWorld.vue'
function loadajax() {
  loadajax0()
  loadajax1()
}
function loadajax0() {
  getlogin({aa:123456}, {loading: false, aa: 1, headers: {Token: 1111}}).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
    // setTimeout(() => {
    //   loadajax1()
    // }, 1000)
  })
}
function loadajax1() {
  getlogin({aa:123456}).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
