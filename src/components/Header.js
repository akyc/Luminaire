import React, { useState } from 'react'
import { RiShoppingCartFill } from 'react-icons/ri'
export default function Header() {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <span className='logo'>Luminaire</span>
            <ul className='nav'>
                <li>8 (800) 750-25-50</li>
                <li>О нас</li>
                <li>Каталог</li>
                <li>Контакты</li>
                <li
                    onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen ? 'active' : ''}`}
                ><RiShoppingCartFill /></li>
            </ul>
            {cartOpen ? (
                <div className='cart'></div>
            ) : ''}
        </header>
    )
}
