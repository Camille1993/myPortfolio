import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.BACK_URL}/projects`)
      .then((res) => setProject(res))
      .catch((err) => console.error(err));
  }, []);

  const ProjectWild = () => {
    project
      .filter((projet) => projet.type === 'informatique')
      .map((projet) => {
        return (
          <div>
            <Link to={<Project key={projet.id} name={projet.name} />}>
              project.name
            </Link>
          </div>
        );
      });
  };
  const ProjectHackaton = () => {
    project
      .filter((projet) => projet.type === 'hackaton')
      .map((projet) => {
        return (
          <div>
            <Link to={<Project key={projet.id} name={projet.name} />}>
              project.name
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
        {ProjectWild()}
      </div>
      <div>
        <h4>Hackaton</h4>
        {ProjectHackaton()}
      </div>
    </div>
  );
};

export default ProjectList;
