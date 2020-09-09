import React, { useState, useContext } from "react";
import { Context } from "../Context";

export default function Image({ className, img }) {
  const [hover, setHover] = useState(false);
  const { toggleFavorite } = useContext(Context);

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <>
          <i
            onClick={() => toggleFavorite(img.id)}
            className="ri-heart-line favorite"
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
      <img src={img.url} className="image-grid" alt="" />
    </div>
  );
}
