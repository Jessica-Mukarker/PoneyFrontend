import React from 'react';
const Base64Image2 = ({ base64Image2 }) => {
  const dataUrl = `data:image/jpeg;base64,${base64Image2}`;

  return <img src={dataUrl} alt="photo"/>;
};

export default Base64Image2;
