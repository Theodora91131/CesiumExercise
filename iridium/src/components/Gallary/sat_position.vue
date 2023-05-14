<script setup lang="ts">
import { onMounted } from "vue";
import * as cmap from "../../core/map.ts";
import { clearInterval } from "timers";
// import {  Viewer, Entity } from "cesium";
// import * as Cesium from "cesium";
// import { Point } from "../../core/sat_position";
// let latLonObjResults  = latLonObjResults ;
//const viewer = new Cesium.Viewer("cesiumContainer");
//const entity = viewer.entities.add({
//  position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
//  ellipse: {
//    semiMinorAxis: 250000.0,
//    semiMajorAxis: 400000.0,
//    material: Cesium.Color.BLUE.withAlpha(0.5),
//  },
//});
    
//  console.log("11111111111111111111111111111111111111111111111");
// const entity = new Entity({
//   id: "sat_position_cesium",
  
// });
// if (!point) point = viewer.entities.add(new Point());
//viewer.entities.add(entity);

onMounted(()=>{
  const intl = setInterval(()=>{
    try{
      const viewer = cmap.getViewer();
      clearInterval(intl);
      console.log(viewer);
    }
    catch{

    }

  },1000);
  

});   
</script>

<template>
  <!-- <div id="cesiumContainer"></div> -->
 
</template>

<style scoped>

</style>
