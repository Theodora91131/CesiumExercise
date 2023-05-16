
import { tleData } from "../assets/iridium_data _tle";
import { LatLngObject, getLatLngObj } from "tle.js";

export class Point {
  // private tleData: any[];
  private latLonObj_results: LatLngObject[];

  constructor() {
    // this.tleData = tleData;
    this.latLonObj_results = [];
  }

  getLatLngObjects() {
    const optionalTimestampMS = 1502342329860;
    for (let i = 0; i < tleData.length; i++) {
      const tleItem =tleData[i];
      
      const latLonObj = getLatLngObj(tleItem, optionalTimestampMS);
      this.latLonObj_results.push(latLonObj);
      
    }
    console.log(this.latLonObj_results);
    return this.latLonObj_results;
  
  }
}
