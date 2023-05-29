import React from "react";
import "./Gallery.scss";
import { images } from "../../constants/image";

function Gallery() {
  return (
    <div className="foto">
      {images.map((item, i) => {
        return <img key={i} src={item} alt="foto" className="images" />;
      })}
    </div>
  );
}

export default Gallery;
