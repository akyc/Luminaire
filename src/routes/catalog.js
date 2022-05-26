import React from 'react'
import Header from '../components/Header';
import Categories from '../components/Categories';
import ProductsGrid from '../components/ProductsGrid';
import Footer from '../components/Footer';

export default function Catalog(props) {
    return (
        <div className='app'>
            <Header cart={props.state.cart} onRemove={props.removeFromeCart} />
            <Categories categories={props.state.activeCategories} chooseCategory={props.chooseCategory} selectedCategory={props.state.selectedCategory} />
            <ProductsGrid
                products={props.state.activeProducts}
                categories={props.state.categories}
                onAdd={props.addToCart}
            />
            <Footer />
        </div>
    )
}
