
import { tleData } from "../assets/iridium_data.ts";
import { getLatLngObj } from "tle.js";
// type SamplePoint = {
//   OBJECT_NAME: string
//   OBJECT_ID: string
//   EPOCH: Date
//   MEAN_MOTION: number
//   ECCENTRICITY: number
//   INCLINATION: number
//   RA_OF_ASC_NODE: number
//   ARG_OF_PERICENTER: number
//   MEAN_ANOMALY: number
//   EPHEMERIS_TYPE: number
//   CLASSIFICATION_TYPE: string
//   NORAD_CAT_ID: number
//   ELEMENT_SET_NO: number
//   REV_AT_EPOCH: number
//   BSTAR: number
//   MEAN_MOTION_DOT: number
//   MEAN_MOTION_DDOT: number
// }


 export class Point{
  private tleData: any[];
  private latLonObj_results: any[];

  constructor() {
    this.tleData = tleData;
    this.latLonObj_results = [];
  }
  
  getLatLngObjects() {
    const optionalTimestampMS = 1502342329860;
    for (let i = 0; i < this.tleData.length; i++) {
      const tleItem = this.tleData[i];
      const latLonObj = getLatLngObj(tleItem, optionalTimestampMS);
      this.latLonObj_results.push(latLonObj);
    }
    return this.latLonObj_results;
  }
  
}
// const point = new Point();
// const latLonObj_results = point.getLatLngObjects();
// console.log(latLonObj_results);