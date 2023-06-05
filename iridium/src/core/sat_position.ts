
import { tleData } from "../assets/iridium_data _tle";
import { LatLngObject, getLatLngObj } from "tle.js";

export class Point {

  private latLonObj_results: LatLngObject[];

  constructor() {
    this.latLonObj_results = [];
  }

  getLatLngObjects() {
    const optionalTimestampMS = 1502342329860;
    for (let i = 0; i < tleData.length; i++) {
      const tleItem =tleData[i];
      try {
        const latLonObj = getLatLngObj(tleItem, optionalTimestampMS);
        this.latLonObj_results.push(latLonObj);
  
      } catch(e) {
       
      }
      
      
    }
    return this.latLonObj_results;
  
  }
}
