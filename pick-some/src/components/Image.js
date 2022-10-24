import React, {useState, useContext} from 'react';
import {CustomContext} from './customContext'

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {photos, toggleFavorite } = useContext(CustomContext)
    return (
        <div onMouseEnter={() => setHovered(true)} onMouseLeave = {() => setHovered(false)} className={`${props.className} image-container`}>
            <img src = {props.img} className="image-grid"/>
            {hovered && <i onClick={() => toggleFavorite(props.id)} className="ri-heart-line favorite"></i>}
            {hovered && <i className="ri-add-circle-line cart"></i>}
        </div>
        
    )
}
export default Image