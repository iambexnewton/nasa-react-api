import React from 'react';
import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_API_URL;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`,
      );
      const data = await res.json();
      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div>problem</div>;
  return (
    <div>
      {photoData.media_type === 'image' ? (
        <img src={photoData.url} alt={photoData.title} />
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
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}