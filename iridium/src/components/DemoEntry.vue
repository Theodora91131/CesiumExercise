<script setup lang="ts">

import Satellite from "./Gallary/sat_position.vue"
</script>
<template>
  <div class="controll-section">
    
    <Satellite/>
  </div>
</template>

<style scoped>
.controll-section {
  position: fixed;
  right: 0.16em;
  top: 0.16em;
  z-index: 2;
}
</style>
