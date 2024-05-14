import React from 'react';
import Tweet from '../componenets/Tweet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/signout">Logout</Link>
      </button>
      <p>I am the homepage</p>
      <Tweet/>
    </div>
  );
};

export default Home;
