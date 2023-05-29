import React from 'react'
import "./Tarosik.scss";
import { images } from "../../constants/image";

function Tarosik() {
  return (
    <div className='foto'>
       {images.map((item, i) => {
        return <img key={i} src={item} alt="foto" className="images" />;
      })}
    </div>
  )
}

export default Tarosik