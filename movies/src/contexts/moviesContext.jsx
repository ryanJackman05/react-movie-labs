import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [Favourites, setFavourites] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [];
    if (!Favourites.includes(movie.id)){
      newFavourites = [...Favourites, movie.id];
    }
    else{
      newFavourites = [...Favourites];
    }
    setFavourites(newFavourites)
  };
  
  // We will use this function in the next step
  const removeFromFavourites = (movie) => {
    setFavourites( Favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        Favourites,
        addToFavourites,
        removeFromFavourites
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
