import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from "react-router-dom";

function getProduct(props, productId) {
    return props.state.products.find((el) => el.article === productId)
}
function getCategory(props, categoryId) {
    return props.state.categories.find((el) => el.id === categoryId)
}
export default function Product(props) {
    let params = useParams();
    let product = getProduct(props, params.productId),
        category = getCategory(props, product.category);
    return (
        <div className='app'>
            <Header cart={props.state.cart} onRemove={props.removeFromeCart} />
            <div className='product-page'>
                <div className='product__img'>
                    <img src={product.img} alt="{product.name}" />
                </div>
                <div className='product__info'>
                    <div><small>{category.name}</small></div>
                    <div><h2>{product.name}</h2></div>
                    <div className='product__article'>
                        <small>Артикул: {product.article}</small>
                    </div>
                    <div className='product__price'>
                        {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(product.price)}
                    </div>
                    <div>
                        <span className='btn' onClick={() => props.addToCart(product)}>Купить</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
