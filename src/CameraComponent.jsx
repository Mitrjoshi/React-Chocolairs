import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const CameraComponent = ({ capturedImage, setCapturedImage }) => {
  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  const resetCamera = useCallback(() => {
    setCapturedImage(null);
  }, []);

  return (
    <div>
      {capturedImage ? (
        // Display the mirrored captured image
        <div>
          <img
            src={capturedImage}
            alt="Captured"
            style={{ maxWidth: "100%", transform: "scaleX(-1)" }}
          />
          <button onClick={resetCamera}>Take Another Photo</button>
        </div>
      ) : (
        // Display the camera feed
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{
              transform: "scaleX(-1)",
            }}
          />
          <button onClick={capture}>Capture photo</button>
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
