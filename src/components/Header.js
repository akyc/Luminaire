import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiShoppingCartFill } from 'react-icons/ri'
import { BsEmojiFrown } from 'react-icons/bs'
import Cart from './Cart'


const showCart = function (props) {
    return (
        <div>
            {props.cart.map((el, i) => <Cart key={i} item={el} onRemove={props.onRemove} />)}
            <div className='cart-item'><b>Итого:</b><span>{showAmount(props)}</span></div>
        </div>)
}

const emptyCart = () => (<div className="empty-cart"><BsEmojiFrown size='50px' color="#ddd" /><br />Корзина пуста</div>)

const showAmount = (props) => {
    let amount = props.cart.reduce((acc, cur) => acc + cur.count * cur.product.price, 0)
    if (amount) {
        return (<small>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(amount)}</small>)
    }
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
        <header>
            <span className='logo'>Luminaire</span>
            <ul className='nav'>
                <li>8 (800) 750-25-50</li>
                {/* <li>О нас</li> */}
                <Link to="/about">О нас</Link>
                <li>Каталог</li>
                <li>Контакты</li>
                <li
                    onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen ? 'active' : ''}`}
                >{showAmount(props)} <RiShoppingCartFill /></li>
            </ul>
            {cartOpen ? <div className='cart'>{props.cart.length > 0 ? showCart(props) : emptyCart()}</div> : ''}
        </header>
    )
}
