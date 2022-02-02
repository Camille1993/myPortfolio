import React from 'react';
import { Routes, Route } from 'react-router-dom';
/**import components */
import Home from './pages/home';
import Presentation from './pages/presentation';
import ProjectList from './pages/projectList';
import Project from './pages/project';
import ContactMe from './pages/contactMe';
/**import css */
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/projects" element={<ProjectList />}>
          <Route path=":projectId" element={<Project />} />
        </Route>
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
