import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((data) => data.json())
      .then((data) => setImgList(data));
  }, []);

  return <Context.Provider value={{ imgList }}>{children}</Context.Provider>;
}

export { ContextProvider, Context };
