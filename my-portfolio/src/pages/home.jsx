import React from 'react';
/**import CSS */
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>My Portfolio</h1>
      <Link to="/presentation">
        <button type="button">Enter</button>
      </Link>
    </div>
  );
};

export default Home;
