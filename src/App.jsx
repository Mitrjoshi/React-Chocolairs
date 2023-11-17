import React, { useState } from "react";
import CameraComponent from "./CameraComponent";
import Gallery from "./Gallery";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);

  return (
    <div>
      App
      {selectedImage === null && (
        <CameraComponent
          capturedImage={capturedImage}
          setCapturedImage={setCapturedImage}
        />
      )}
      {capturedImage === null && (
        <Gallery
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
};

export default App;
