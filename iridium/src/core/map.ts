import { Viewer } from "cesium";
import * as Cesium from "cesium";
// const viewer = new Viewer("cesiumContainer",{
//     geocoder:true ,
//     homeButton:true,
//     sceneModePicker:true,
//     baseLayerPicker:true,
//     navigationHelpButton:true,
//     animation:true,
//     fullscreenButton:true
//   });
//   // sandbox權限
//   var iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
//   iframe.setAttribute(
//     "sandbox",
//     "allow-same-origin allow-scripts allow-popups allow-forms"
//   );
//   iframe.setAttribute("src","");  
//       var entity = viewer.entities.add({

//       });
let VIEWER: Viewer;
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkM2M0ZWNjZS01NmEzLTQ5ZTMtYjUzNy01MzA1NmU0N2ViMDUiLCJpZCI6MTIzNTMzLCJpYXQiOjE2NzU2NjcyNDh9.qbOehB4ZSe8qL8XrnfaMQ8jD8_i0MjU494IPRwdru-0';
export const create = ((container: HTMLElement) => {
  const viewer = new Viewer(container, {
    geocoder: true,
    homeButton: true,
    sceneModePicker: true,
    baseLayerPicker: true,
    navigationHelpButton: true,
    animation: true,
    fullscreenButton: true
  });
  const iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
  iframe.setAttribute(
    "sandbox",
    "allow-same-origin allow-scripts allow-popups allow-forms"
  );
  iframe.setAttribute("src", "");
  VIEWER = viewer;
});
export const getViewer = (): Viewer => {
  if (!VIEWER) throw "VIEWER not init";
  return VIEWER;
};