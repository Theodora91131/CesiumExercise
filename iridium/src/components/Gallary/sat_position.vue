<script setup lang="ts">
import { onMounted } from "vue";
import * as cmap from "../../core/map.ts";
import {  Viewer, Entity } from "cesium";
import { Point } from "../../core/sat_position.ts"
let point: Point;
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

// if (!point) point = viewer.entities.add(new Point());
//viewer.entities.add(entity);
const main = (viewer:Viewer)=>{
  point ??= viewer.entities.add(new Point());
  
  point.show = show;
  console.log(point)
    
    
});
}
onMounted(()=>{
  const intl = setInterval(() => {
    try {
      // console.log('Here')
      const viewer = cmap.getViewer();
      main(viewer)
      clearInterval(intl);

    } catch {
    }
  }, 1000)

});
   
</script>

<template>
  <!-- <div id="cesiumContainer"></div> -->
 
</template>

<style scoped>

</style>
