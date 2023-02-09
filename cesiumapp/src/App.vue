<script setup>
import {  Viewer } from "cesium";
import { onMounted  } from "vue";
import * as Cesium from "cesium";
//import { TilesRenderer } from '3d-tiles-renderer';
//import * as Cesium from 'cesium/Source/Cesium.js'
import "cesium/Build/Cesium/Widgets/widgets.css";
//import Cesium from 'cesium/Source/Cesium.js';
//import "cesium/Build/Cesium/Cesium.js"
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
  // 加载3D tileset
  var tileset_url = "";
   
    tileset_url = "node_modules/Apps/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json";;
//tileset_url = "http://localhost:8080/Apps/SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json";
  const  tileset = new Cesium.Cesium3DTileset({ url: tileset_url });
  tileset.readyPromise.then(function (tileset) {
      // 添加tileset到viewer
      viewer.scene.primitives.add(tileset);
  const  default_HeadingPitchRange = new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius * 2.0);
      // 聚焦tileset
      viewer.zoomTo(tileset, default_HeadingPitchRange);
      // overwrite homebutton
      viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
        e.cancel = true;
        viewer.zoomTo(tileset, default_HeadingPitchRange);
      });
    });
    var glbUrl = "node_modules/Apps/SampleData/models/CesiumAir/Cesium_Air.glb";
    // 加载glb飞机
    createModel(glbUrl, 5000.0);
    // 飞机
    function createModel(url, height) {
      viewer.entities.removeAll();
      var position = Cesium.Cartesian3.fromDegrees(116.39, 39.93, 60);
      var heading = Cesium.Math.toRadians(135);
      var pitch = 0;
      var roll = 0;
      var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
      var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
      var entity = viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
          minimumPixelSize: 128,
          maximumScale: 20000
        }
      });
      viewer.trackedEntity = entity;
    }  
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
