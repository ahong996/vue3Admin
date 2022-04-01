<template>
  <router-view />
</template>

<script setup></script>

<style>
/* 清除浏览器自带的默认样式 */
body,div,p,h1,h2,h3,h4,h5,h6,ul,li,dl,dt,a,input,button,textarea,select{
margin:0;
padding:0;
outline:none;
}
html,body{
color:#333333;
background-color:#ffffff;
min-width:1200px;
font-size:12px;
}
a{
text-decoration:none;
}
ul,li{
list-style:none;
}
input{
font:normal;
}
input:focus,a:focus{
outline:none;
}
</style>
