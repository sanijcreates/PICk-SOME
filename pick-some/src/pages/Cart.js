import React,{useContext, useState} from "react"
import {CustomContext} from '../components/customContext'
import CartItem from '../components/CartItem'

function Cart() {
    const {cartItems, emptyCart} = useContext(CustomContext)
    const [pressed, setPressed] = useState(false)
    
    const mappedItems = cartItems.map(item => (
        <CartItem key = {item.id} item = {item}/>
    ))
    const totalCost = cartItems.length * 5.99

    function PlaceOrder() {
        setTimeout(loggin, 1000)
    }
    function loggin() {
       setPressed(true);
        console.log("Order Placed")
        emptyCart()
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {mappedItems}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-US", {style: "currency", currency: "NRS"})}</p>
            {cartItems.length>0 && <button onClick={() =>PlaceOrder()}>{pressed ? "Ordering.." : "Place Order"}</button>}
        </main>
    )
}

export default Cart