import React from 'react';
import './Bae64image.css';
const Base64Image = ({ base64Image }) => {
  const dataUrl = `data:image/jpeg;base64,${base64Image}`;

  return <img src={dataUrl} alt="photo"/>;
};

export default Base64Image;
