import React, { useState } from "react";
import Banner from "../Images/Banner.png";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import "../HomePage/HomePage.css";

const HomePage = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 16 / 9 });
  const [result, setResult] = useState(null);

  function getCroppedImg() {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    const base64Image = canvas.toDataURL("image/jpeg");
    setResult(base64Image);
  }

  return (
    <div>
      <div className="image-main">
        <ReactCrop
          src={Banner}
          onImageLoaded={setImage}
          crop={crop}
          onChange={setCrop}
        />
        <button className="primary" onClick={getCroppedImg}>
          {" "}
          crop Image
        </button>
      </div>
      {result && (
        <div className="image-preview">
          <img src={result} alt="cropped Image" />
        </div>
      )}
    </div>
  );
};
export default HomePage;
