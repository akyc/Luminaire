import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom";
import { RiShoppingCartFill } from 'react-icons/ri'
import { BsEmojiFrown } from 'react-icons/bs'
import Cart from './Cart'

const showCart = function (props) {
    return (
        <div>
            {props.cart.map((el, i) => <Cart key={i} item={el} onRemove={props.onRemove} />)}
            <div className='cart-item'><b>Итого:</b><span>{showAmount(props)}</span></div>
        </div>
    )
}

const emptyCart = () => (<div className="empty-cart"><BsEmojiFrown size='50px' color="#ddd" /><br />Корзина пуста</div>)

const showAmount = (props) => {
    let amount = props.cart.reduce((acc, cur) => acc + cur.count * cur.product.price, 0)
    if (amount) {
        return (<small>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(amount)}</small>)
    }
}
document.body.addEventListener('mousedown', function (e) {
    console.log(e.target)
    const cart = document.querySelector('.cart')
    console.log(e.target.contains(cart))
})

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    let wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    const cart = document.querySelector('.cart')
    function useOutsideClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target) && !ref.current.contains(cart) && cartOpen) {
                    setCartOpen(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    return (
        <header>
            <span className='logo'>
                <Link to={"/"}>Luminaire</Link>
            </span>
            <ul className='nav'>
                <li><a href={"tel:88007771537"}>8 (800) 777-15-37</a></li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about">
                        О нас
                    </NavLink></li>
                <li>Каталог</li>
                <li>Контакты</li>
                <li ref={wrapperRef}
                    onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`cart-button ${cartOpen ? 'active' : ''}`}
                >{showAmount(props)} <RiShoppingCartFill /></li>
            </ul>
            {cartOpen ? <div className='cart' ref={wrapperRef}>{props.cart.length > 0 ? showCart(props) : emptyCart()}</div> : ''}
        </header>
    )
}
