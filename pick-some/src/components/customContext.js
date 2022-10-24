import React, { useState,useEffect } from 'react';

const CustomContext = React.createContext()

function CustomContextProvider(props) {
    const [photos, setPhotos] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        const togglePhoto = photos.find(el => el.id == id)
        photos.map(el => {
            if (togglePhoto.id === el.id) {
                return {
                    ...el,
                    isFavorite : !el.isFavorite
                }
            }
            return el
    })
      
    }
    return (
        <CustomContext.Provider value = {{photos: photos, toggleFavorite : toggleFavorite}}>
            {props.children}
        </CustomContext.Provider>
    )
}
export {CustomContextProvider, CustomContext}