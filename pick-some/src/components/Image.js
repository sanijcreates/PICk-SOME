import React, {useState, useContext} from 'react';
import {CustomContext} from './customContext'
import PropTypes from 'prop-types'

function Image({photo, className}) {
    const [hovered, setHovered] = useState(false)
    const {photos, toggleFavorite, addCart, cartItems, removeCart} = useContext(CustomContext)
    function heartIcon() {
        if (photo.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(photo.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(photo.id)}></i>
        }   
    }
    function isCart() {
        const cartFound = cartItems.some(img => img.id === photo.id)
        if (cartFound) {
            return <i className="ri-shopping-cart-fill cart" onClick = {() => removeCart(photo)}></i>
        } else if(hovered) {
            return <i onClick={() => addCart(photo)} className="ri-add-circle-line cart"></i>
        }
    }
    
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave = {() => setHovered(false)} className={`${className} image-container`}>
            <img src = {photo.url} className="image-grid"/>
            {heartIcon()}
            {isCart()}
            {/* <i onClick={() => addCart(photo)} className="ri-add-circle-line cart"></i> */}
        </div>
        
    )
}
Image.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape( {
        isFavorite: PropTypes.bool,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
}
export default Image