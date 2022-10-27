import React, {useContext} from "react"
import {Link} from 'react-router-dom'
import {CustomContext} from './customContext'

function Header() {
    const {cartItems} = useContext(CustomContext)
    return (
        <header>
            <h2><Link to ="/">PICk SOME</Link></h2>
            <Link to = "/cart"><i className={cartItems.length > 0 ? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"}></i></Link>
        </header>
    )
}

export default Header
