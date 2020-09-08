import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";

function Photos() {
  const { imgList } = useContext(Context);

  const imageElements = imgList.map((pic, i) => (
    <Image key={pic.id} img={pic} className={getClass(i)} />
  ));

  return <main className="photos">{imageElements}</main>;
}

export default Photos;
