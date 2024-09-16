import React, { useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';

const IMAGE_EXPIRY_TIME = 60 * 1000; // 1 minute in milliseconds

const UserCapture = () => {
  const webcamRef = useRef(null);

  const captureImage = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        // Save the image and timestamp to localStorage
        localStorage.setItem('capturedImage', imageSrc);
        localStorage.setItem('imageTimestamp', Date.now().toString());
        console.log('Image captured and saved to localStorage');
      } else {
        console.log('Failed to capture image');
      }
    }
  }, [webcamRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      captureImage(); // Capture the image after 4 seconds
    }, 4000);

    return () => clearTimeout(timer);
  }, [captureImage]);

  return (
    <div>
      <h1>User Side - Capturing Image</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={350}
      />
    </div>
  );
};

export default UserCapture;
