import React, { useEffect, useState } from "react";
import Topnav from "../../../components/Topnav/Topnav";
import "./species.css";

export default function Species() {
  const endpoint = "https://swapi.dev/api/species/";
  const [species, setSpecies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchSpecies = async () => {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    setSpecies(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchSpecies();
  }, []);

  return (
    <>
      <Topnav route="Species" />
      <div className="speciesSection">
        <div className="speciesCard">
          <div className="speciesHead">
            <p>Name</p>
            <p>Classification</p>
            <p>Designation</p>
            <p>Average height</p>
            <p>Average lifespan</p>
            <p>Eye colors</p>
            <p>Hair colors</p>
            <p>Language</p>
          </div>
          {species.map((specie, index) => (
            <div key={index} className="species">
              <p>{specie.name}</p>
              <p>{specie.classification}</p>
              <p>{specie.designation}</p>
              <p>{specie.average_height}</p>
              <p>{specie.average_lifespan}</p>
              <p>{specie.eye_colors}</p>
              <p>{specie.hair_colors}</p>
              <p>{specie.language}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
