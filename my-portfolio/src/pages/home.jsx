import React from 'react';
import { Link } from 'react-router-dom';
/**
 * import CSS
 *  */
import './home.css';

function Home() {
  return (
    <div className="home">
      <h1>My Portfolio</h1>
      <Link to="/presentation">
        <button type="button">Enter</button>
      </Link>
    </div>
  );
}

export default Home;
