import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
  return (
    <div className='landing-container'>
      <div className='landing-content'>
        <h1>Experience the Clearer Windows Difference!</h1>
        <h2>Say Goodbye to Dirty, Streaky Glass with Our Professional Window Cleaning Services!</h2>
          <Link to="/get-a-quote" type='button' className='text-reset button' style={{textDecoration: 'none'}}>
            Get a Free Quote
          </Link>
      </div>
    </div>
  );
}

export default Home;