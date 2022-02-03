import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './projectList.css';

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
              <div type="button" className="cardProject">
                {projet.name}
              </div>
            </Link>
          </div>
        );
      });
  };
  return (
    <div className="projectList">
      <Link to="/presentation" className="goback">
        go back
      </Link>
      <h2>Projects</h2>
      <div>
        <h4>Project Wild Code School</h4>
        <div className="listProject">{Project('informatique')}</div>
      </div>
      <div>
        <h4>Hackathon</h4>
        <div className="listProject">{Project('hackaton')}</div>
      </div>
    </div>
  );
}

export default ProjectList;
