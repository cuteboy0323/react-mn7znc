import React from "react";
import "./style.css";
import Map from "./Map";
import data from "./data.json";

export default function App() {
  console.log(data,999)
  return (
    <Map center={{ lat: 52.8174847, lng: 10.6912322 }} zoom={4} data={data} />
  );
}
