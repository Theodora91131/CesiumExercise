<script setup lang="ts">
import { onMounted } from "vue";
import * as cmap from "../../core/map.ts";
import * as Cesium from "cesium";
import { Point } from "../../core/sat_position.ts"

const main = (viewer: Cesium.Viewer) => {

  const entities: Cesium.Entity[] = [];

  const point = new Point();
  const latLonObjResults = point.getLatLngObjects();

  for (const latLonObj of latLonObjResults) {
    const entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(latLonObj.lng, latLonObj.lat),
      point: {
        pixelSize: 10,
        color: Cesium.Color.YELLOW,
      },
    });
    entities.push(entity);
  }

  viewer.zoomTo(entities);
}
onMounted(() => {
  const intl = setInterval(() => {
    try {
      // console.log('Here')
      const viewer = cmap.getViewer();
      main(viewer)
      clearInterval(intl);

    } catch(e) {
      console.log(e);
    }
  }, 1000)

});

</script>

<template>
  <!-- <div id="cesiumContainer"></div> -->
</template>

<style scoped></style>
