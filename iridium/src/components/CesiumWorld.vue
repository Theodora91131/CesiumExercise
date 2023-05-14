<script setup lang="ts">
import { onMounted, ref  } from "vue";
import DemoEntry from "./DemoEntry.vue";
import * as cmap from "../core/map.ts";
const cesiumContainer = ref();
onMounted(()=>{
  cmap.create(cesiumContainer.value);
}); 
</script>

<template>
  <div id="cesiumContainer"  ref="cesiumContainer">
    <DemoEntry />
  </div>
  
</template>

<style scoped>
@import "cesium/Build/Cesium/Widgets/widgets.css";
#cesiumContainer{
  width:100%;
  height:100%;
  position:absolute;
 
}
</style>
