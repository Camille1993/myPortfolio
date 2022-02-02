import React, { useEffect, useState } from "react";
import axios from "axios";

/**import CSS */
import "swiper/css";

const Project = ({ project }) => {
  const [techno, setTechno] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.URL_BACK}/project/${project.id}/techno`)
      .then((res) => setTechno(res))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>{project.name}</h2>
      <img
        src={`../assets/pictures/${project.name}.jpg`}
        alt={`${project.name} home page`}
      />
      <div>
        <h5>Description</h5>
        <p>{project.description}</p>
      </div>
      <div>
        <h5>Technologies utilisées</h5>
        <ul>
          {techno.map((techno) => (
            <li>{techno.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
