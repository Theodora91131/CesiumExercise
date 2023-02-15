<script setup>
import {  Viewer } from "cesium";
import { onMounted  } from "vue";
import * as Cesium from "cesium";

import "cesium/Build/Cesium/Widgets/widgets.css";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2M0ZWNjZS01NmEzLTQ5ZTMtYjUzNy01MzA1NmU0N2ViMDUiLCJpZCI6MTIzNTMzLCJpYXQiOjE2NzU2NjcyNDh9.qbOehB4ZSe8qL8XrnfaMQ8jD8_i0MjU494IPRwdru-0';
onMounted(()=>{
  const viewer = new Viewer("cesiumContainer",{
    geocoder:true ,
    homeButton:true,
    sceneModePicker:true,
    baseLayerPicker:true,
    navigationHelpButton:true,
    animation:true,
    fullscreenButton:true
  });
  // sandbox權限
  var iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
  iframe.setAttribute(
    "sandbox",
    "allow-same-origin allow-scripts allow-popups allow-forms"
  );
  iframe.setAttribute("src","");
  // remove default base layer
  viewer.imageryLayers.remove(viewer.imageryLayers.get(0))
  //add Sentinel-2 imagery
  viewer.imageryLayers.addImageryProvider(new Cesium.IonImageryProvider({assetId : 3954}));
  // Load Cesium World Terrain
  viewer.terrainProvider = Cesium.createWorldTerrain({
    requestWaterMask: true, // required for water effects
    requestVertexNormals: true // required for terrain lighting
  })
  // Enable depth testing so things behind the terrain disappear
  viewer.scene.globe.depthTestAgainstTerrain = true;
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
