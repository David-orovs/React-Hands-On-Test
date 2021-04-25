import React, { useEffect, useState } from "react";
import Topnav from "../../../components/Topnav/Topnav";
import "./people.css";

export default function People() {
  const endpoint = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchStars = async () => {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    setPeople(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchStars();
  }, []);

  return (
    <>
      <Topnav route="People" />
      <section className="peopleSection">
        <div className="peopleCard">
          <div className="peopleHead">
            <p>Name</p>
            <p>Birth year</p>
            <p>Gender</p>
            <p>Eye color</p>
            <p>Hair color</p>
            <p>Height</p>
            <p>Mass</p>
            <p>Skin color</p>
            <p>Created</p>
          </div>
          {people.map((people, index) => {
            return (
              <div key={index} className="people">
                <p>{people.name}</p>
                <p>{people.birth_year}</p>
                <p>{people.gender}</p>
                <p>{people.eye_color} GC</p>
                <p>{people.hair_color}</p>
                <p>{people.height} Metres</p>
                <p>{people.mass}</p>
                <p>{people.skin_color}</p>
                <p className="date">{people.created}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
