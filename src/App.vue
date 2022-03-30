<script setup>
import { getlogin } from '@/api'
import HelloWorld from '@/components/HelloWorld.vue'
getlogin({aa:123456}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
</script>

<template>
  <el-button>Default</el-button>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

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
