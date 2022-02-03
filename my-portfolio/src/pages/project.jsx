import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import './project.css';

function Project() {
  const [techno, setTechno] = useState([]);
  const [projet, setProjet] = useState({});
  const { projectid } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACK}/project/${projectid}`)
      .then((res) => {
        console.log(res.data[0]);
        setProjet(res.data[0]);
      })
      .catch((err) => console.error(err));
    axios
      .get(`${process.env.REACT_APP_URL_BACK}/project/${projectid}/techno`)
      .then((res) => setTechno(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="project">
      <Link to="/projects" className="goback">
        go back
      </Link>
      <h2>{projet.name}</h2>
      <img
        src={`../assets/${projet.name}.png`}
        alt={`${projet.name} home page`}
      />
      <div>
        <h4>Description</h4>
        <p>{projet.description}</p>
      </div>
      <div>
        <h4>Technologies utilisées</h4>
        <ul>
          {techno.map((technos) => (
            <li className="technoList">{technos.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
