<script setup>
import {  Viewer } from "cesium";
import { onMounted  } from "vue";
onMounted(()=>{
  const viewer = new Viewer("cesiumContainer");
  const iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
  iframe.setAttribute(
    "sandbox",
    "allow-some-origin allow-scripts allow-popups allow-forms"
  );
  iframe.setAttribute("src","");

});
</script>

<template>
  <div id="cesiumContainer"></div>
  
</template>

<style scoped>
#cesiumContainer{
  width:100%;
  height:100%;
  position:absolute;
 
}
</style>
