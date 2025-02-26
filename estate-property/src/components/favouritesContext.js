import React, {useContext, createContext, useState} from 'react';

const FavouritesContext = createContext();

export const FavouritesProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
        
    
    const addFavourite = (property) => {
        if(!favourites.find(fav => fav.id === property.id)){
            setFavourites([...favourites, property]);
        }
        
    };

    const removeFavourite = (propertyId) => {
        setFavourites(favourites.filter((fav) => fav.id !== propertyId))
    }

    return (
        <FavouritesContext.Provider value={{favourites, addFavourite, removeFavourite}}>
            {children}
        </FavouritesContext.Provider>
    )
}

export const useFavourites = () => useContext(FavouritesContext);