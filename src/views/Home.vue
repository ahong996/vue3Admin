
<template>
  <el-button @click="loadajax">Default</el-button>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <el-button @click="setBtn">set设置</el-button>
  <el-button @click="getBtn">get获取</el-button>
  <el-button @click="lengthBtn">length长度</el-button>
  <el-button @click="removeBtn">remove移除</el-button>
  <el-button @click="clearBtn">clear清空</el-button>
  <router-link to="/about">关于</router-link>
  <router-link :to="{name: 'About'}">关于</router-link>
  <el-button @click="to">关于</el-button>
</template>

<script setup>
import { getlogin } from '@/api'
import HelloWorld from '@/components/HelloWorld.vue'
import {MyLocalStorage} from '@/localStorage'
import {useRouter} from 'vue-router'
const router = useRouter()
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
function to(){
  router.push('/about')
}
const myLocalStorage = new MyLocalStorage()
const myLocalStorage1 = new MyLocalStorage(':')
function setBtn() {
  myLocalStorage.setItem('a',1)
  myLocalStorage.setItem('a',222)
  myLocalStorage.setItem('b',{b:2})
  myLocalStorage1.setItem('b',{b:2}, 10)
  myLocalStorage1.setItem('a',{a:2})
}
function getBtn() {
  console.log(myLocalStorage1.getItem('b'))
  console.log(myLocalStorage1.getItem('a'))
}
function lengthBtn() {
  console.log(myLocalStorage.length())
}
function removeBtn() {
  myLocalStorage.removeItem('a')
}
function clearBtn() {
  myLocalStorage.clear()
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
