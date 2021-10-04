import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import '/Users/beckynewton/Desktop/react-projects/nasa/src/App.css';

const apiKey = process.env.REACT_APP_API_URL;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div>Loading...</div>;
  return (
    <>
      <NavBar />
      <div className="nasa-photo">
        {photoData.media_type === 'image' ? (
          <img src={photoData.url} alt={photoData.title} className="photo" />
        ) : (
          <iframe
            title="video"
            src="(photoData.url)"
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <div className="photo-data">
          <h1 className="title">{photoData.title}</h1>
          <p className="date">{photoData.date}</p>
          <p className="information">{photoData.explanation}</p>
        </div>
      </div>
    </>
  );
}
