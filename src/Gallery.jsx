import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Gallery = ({ selectedImage, setSelectedImage }) => {
  const [crop, setCrop] = useState();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Set the selected image to the data URL
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* Input to upload a file */}
      <input type="file" accept="image/*" onChange={handleFileUpload} />

      {/* Display the selected image */}
      {selectedImage && (
        <div>
          <h2>Selected Image</h2>
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: "100%" }}
            />
          </ReactCrop>
        </div>
      )}
    </div>
  );
};

export default Gallery;
