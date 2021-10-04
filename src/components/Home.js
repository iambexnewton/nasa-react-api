import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/beckynewton/Desktop/react-projects/nasa/src/App.css';

export default function Home() {
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto">
        Photo of the day
      </Link>
    </div>
  );
}
