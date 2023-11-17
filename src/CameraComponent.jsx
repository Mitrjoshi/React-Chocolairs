// Import necessary libraries
import React, { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const CameraComponent = () => {
  // Create a reference to the webcam
  const webcamRef = useRef(null);

  // Function to capture a photo
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Do something with the image source, like displaying it or sending it to a server
  }, [webcamRef]);

  return (
    <div>
      {/* Render the webcam component */}
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />

      {/* Button to capture a photo */}
      <button onClick={capture}>Capture photo</button>
    </div>
  );
};

export default CameraComponent;
