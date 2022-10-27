import React, { useState,useEffect } from 'react';

const CustomContext = React.createContext()

function CustomContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    
    function addCart(newitem) {
            setCartItems(prevItems =>[...prevItems, newitem])
        
    }
    function removeCart(newItem) {
        setCartItems(prevItems => prevItems.filter(item => newItem !== item))
    }
    function toggleFavorite(id) {
       const updatedArr=  photos.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    isFavorite : !el.isFavorite
                }
            }
            return el
    })      
    setPhotos(updatedArr)
    }
    function emptyCart() {
        setCartItems([])
    }
    console.log(cartItems)
    
    return (
        <CustomContext.Provider value = {{photos, toggleFavorite, addCart, cartItems, removeCart, emptyCart}}>
            {props.children}
        </CustomContext.Provider>
    )
}
export {CustomContextProvider, CustomContext}