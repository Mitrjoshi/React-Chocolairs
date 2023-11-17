import React, { useState } from "react";

const Gallery = ({ selectedImage, setSelectedImage }) => {
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
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
