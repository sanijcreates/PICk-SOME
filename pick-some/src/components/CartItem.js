import React, {useContext, useState} from "react";
import { CustomContext } from "./customContext";

function CartItem({item}) {
   const {removeCart} = useContext(CustomContext)
   const [hovered, setHovered] = useState(false);

   function cartIcon()  {
    if(hovered) {
    return <i onMouseEnter={() => setHovered(true)} onClick= {() => removeCart} className = "ri-delete-bin-fill"/> } 
   else {
    return <i onMouseLeave = {() => setHovered(false)} onClick = {() => removeCart} className="ri-delete-bin-line"></i> 
   } }
    return (
        <div className="cart-item">
            {cartIcon()}
            <img src={item.url} width="130px" />
            <p>NRS 5.99</p>
        </div> 
    )
}

export default CartItem