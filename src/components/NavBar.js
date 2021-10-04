import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/beckynewton/Desktop/react-projects/nasa/src/App.css';

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/">
          Back to Home
        </Link>
      </ul>
    </div>
  );
}
