import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [Favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

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

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;
