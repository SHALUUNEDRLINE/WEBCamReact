import React, { useState, useEffect } from 'react';

const IMAGE_EXPIRY_TIME = 60 * 1000; // 1 minute in milliseconds

const AdminDisplay = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem('capturedImage');
    const storedTimestamp = localStorage.getItem('imageTimestamp');
    const currentTime = Date.now();

    if (storedImage && storedTimestamp) {
      const imageTimestamp = parseInt(storedTimestamp, 10);
      if (currentTime - imageTimestamp < IMAGE_EXPIRY_TIME) {
        setCapturedImage(storedImage);
      } else {
        console.log('Image expired. Please refresh the user side.');
        // Optionally, clear the expired image
        localStorage.removeItem('capturedImage');
        localStorage.removeItem('imageTimestamp');
      }
    } else {
      console.log('No image found or image has expired.');
    }
  }, []);

  return (
    <div>
      <h1>Admin Side - Displaying Captured Image</h1>
      {capturedImage ? (
        <img src={capturedImage} alt="Captured" width="350" />
      ) : (
        <p>No image available or image has expired</p>
      )}
    </div>
  );
};

export default AdminDisplay;
