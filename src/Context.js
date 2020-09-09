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

  const toggleFavorite = (id) => {
    const newArr = imgList.map((x) => {
      if (x.id === id) {
        console.log(id);
        console.log(!x.isFavorite);
        return { ...x, isFavorite: !x.isFavorite };
      }
      return x;
    });
    setImgList(newArr);
  };

  return (
    <Context.Provider value={{ imgList, toggleFavorite }}>
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
