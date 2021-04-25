import React, { useEffect, useState } from "react";
import Topnav from "../../../components/Topnav/Topnav";
import "./vehicle.css";

export default function Vehicles() {
  const endpoint = "https://swapi.dev/api/vehicles/";
  const [vehicles, setVehicles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchVehicles = async () => {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    setVehicles(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      <Topnav route="Vehicles" />
      <section className="vehiclesSection">
        <div className="vehicleCard">
          <div className="vehicleHead">
            <p>Vehicle Name</p>
            <p>Vehicle Model</p>
            <p>Vehicle Class</p>
            <p>Vehicle Manufacturer</p>
            <p>Vehicle Length</p>
            <p>Crew</p>
            <p>Passengers</p>
            <p>Cargo Capacity</p>
          </div>
          {vehicles.map((vehicle, index) => (
            <div key={index} className="vehicle">
              <p>{vehicle.name}</p>
              <p>{vehicle.model}</p>
              <p>{vehicle.vehicle_class}</p>
              <p>{vehicle.manufacturer}</p>
              <p>{vehicle.length}</p>
              <p>{vehicle.crew}</p>
              <p>{vehicle.passengers}</p>
              <p>{vehicle.cargo_capacity}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
