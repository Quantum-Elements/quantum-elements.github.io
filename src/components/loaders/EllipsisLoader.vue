<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EllipsisLoader'
})
</script>

<template>
  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
 </template>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="scss" scoped>
 $base-size: 8px;
 $speed: 0.8s;
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: $base-size*10;
  height: $base-size;
}
.lds-ellipsis div {
  position: absolute;
  // top: $base-size*2;
  width: $base-size;
  height: $base-size;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: $base-size;
  animation: lds-ellipsis1 $speed infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: $base-size;
  animation: lds-ellipsis2 $speed infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: $base-size*4;
  animation: lds-ellipsis2 $speed infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: $base-size*7;
  animation: lds-ellipsis3 $speed infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate($base-size*4, 0);
  }
}
 </style>
