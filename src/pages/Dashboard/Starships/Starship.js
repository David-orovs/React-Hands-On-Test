import React, { useEffect, useState } from "react";
import Topnav from "../../../components/Topnav/Topnav";
import "./starship.css";

export default function Starship() {
  const endpoint = "https://swapi.dev/api/starships/";
  const [stars, setStars] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchStars = async () => {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    setStars(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchStars();
  }, []);

  return (
    <>
      <Topnav route="Starships" />
      <section className="starships">
        <div className="starshipsCard">
          <div className="starHead">
            <p>Name</p>
            <p>Model</p>
            <p>Class</p>
            <p>Cost (in GC)</p>
            <p>Passengers</p>
            <p>Length</p>
            <p>Crew</p>
          </div>
          {stars.map((star, index) => {
            return (
              <div key={index} className="star">
                <p>{star.name}</p>
                <p>{star.model}</p>
                <p>{star.starship_class}</p>
                <p className="GC">{star.cost_in_credits} GC</p>
                <p>{star.passengers}</p>
                <p>{star.length} Metres</p>
                <p>{star.crew}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
