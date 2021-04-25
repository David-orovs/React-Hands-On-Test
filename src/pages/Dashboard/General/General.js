import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./general.css";
import Topnav from "../../../components/Topnav/Topnav";
import Vid from "../../../images/video-camera (1).svg";
import Ufo from "../../../images/ufo.svg";
import Grp from "../../../images/group-of-students.svg";
import Tax from "../../../images/taxi.svg";
import Phy from "../../../images/phylogenetics.svg";

export default function General() {
  const history = useHistory();
  const endpoint = "https://swapi.dev/api/films/";
  const [films, setFilms] = useState([]);
  const [Loading, setLoading] = useState(true);
  const fetchFilms = async () => {
    const reponse = await fetch(endpoint);
    const data = await reponse.json();
    setFilms(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <>
      <Topnav route={"Dashboard"} />
      <div className="inputContainer">
        <div>
          <select>
            <option>Current Year</option>
          </select>
        </div>
        <div>
          <select>
            <option>Current Week</option>
          </select>
        </div>
      </div>
      <div className="general">
        <div className="generalContainer">
          <div className="cards">
            <div className="cardText">
              <h3>Films</h3>
              <img src={Vid} alt="Sch" />
            </div>
            <div className="cardBelow">
              <p>200</p>
              <div>
                <span style={{ color: "green" }}>
                  ↑ 20{" "}
                  <span style={{ color: "#666D92", marginLeft: "10px" }}>
                    More than yesterday
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="cards" onClick={() => history.push("/app/starships")}>
            <div className="cardText">
              <h3>Starships</h3>
              <img src={Ufo} alt="Sch" />
            </div>
            <div className="cardBelow">
              <p>200</p>
              <div>
                <span style={{ color: "green" }}>
                  ↑ 20{" "}
                  <span style={{ color: "#666D92", marginLeft: "10px" }}>
                    More than yesterday
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="cards" onClick={() => history.push("/app/people")}>
            <div className="cardText">
              <h3>People</h3>
              <img src={Grp} alt="Sch" />
            </div>
            <div className="cardBelow">
              <p>200</p>
              <div>
                <span style={{ color: "green" }}>
                  ↑ 20{" "}
                  <span style={{ color: "#666D92", marginLeft: "10px" }}>
                    More than yesterday
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="cards" onClick={() => history.push("/app/vehicles")}>
            <div className="cardText">
              <h3>Vehicles</h3>
              <img src={Tax} alt="Sch" />
            </div>
            <div className="cardBelow">
              <p>200</p>
              <div>
                <span style={{ color: "green" }}>
                  ↑ 20{" "}
                  <span style={{ color: "#666D92", marginLeft: "10px" }}>
                    More than yesterday
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="cards" onClick={() => history.push("/app/species")}>
            <div className="cardText">
              <h3>Species</h3>
              <img src={Phy} alt="Sch" />
            </div>
            <div className="cardBelow">
              <p>200</p>
              <div>
                <span style={{ color: "green" }}>
                  ↑ 20{" "}
                  <span style={{ color: "#666D92", marginLeft: "10px" }}>
                    More than yesterday
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="filmBlock">
          <h2>Films</h2>
          <div>
            <div className="filmsHead">
              <p>Film Title</p>
              <p>Director</p>
              <p>Producer</p>
              <p>Release Date</p>
              <p>Episode ID</p>
              <p>Characters</p>
            </div>
            {films.map((film, index) => {
              return (
                <div key={index} className="film">
                  <p>
                    <img src={Vid} alt="Sch" />
                    {film.title}
                  </p>
                  <p>{film.director}</p>
                  <p>{film.producer}</p>
                  <p>{film.release_date}</p>
                  <p>{film.episode_id}</p>
                  <p className="characters">{film.characters[0]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
