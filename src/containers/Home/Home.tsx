import React from 'react';
import {Link} from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <ul className="mt-3">
        <li><Link to="/">All</Link></li>
        <li><Link to="/quotes/star-wars">Star Wars</Link></li>
        <li><Link to="/quotes/famous-people">Famous people</Link></li>
        <li><Link to="/quotes/saying">Saying</Link></li>
        <li><Link to="/quotes/humor">Humor</Link></li>
        <li><Link to="/quotes/motivational">Motivation</Link></li>
      </ul>
    </div>
  );
};

export default Home;
