import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProjectList() {
  const [project, setProject] = useState([{}]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACK}/project`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  /**
   * permet de filter selon le type de projet
   * @param {} type
   * @returns
   */
  const Project = (type) => {
    return project
      .filter((projet) => projet.type === type)
      .map((projet) => {
        return (
          <div key={projet.id}>
            <Link to={`/projects/${projet.id}`}>
              <button type="button">{projet.name}</button>
            </Link>
          </div>
        );
      });
  };
  return (
    <div>
      <h2>Projects</h2>
      <div>
        <h4>Project Wild Code School</h4>
        {Project('informatique')}
      </div>
      <div>
        <h4>Hackathon</h4>
        {Project('hackaton')}
      </div>
    </div>
  );
}

export default ProjectList;
