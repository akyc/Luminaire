import React from 'react'
import Header from './components/Header';
import Slides from './components/Slides';
import Categories from './components/Categories';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <Header cart={this.state.cart} onRemove={this.removeFromeCart} />
            <Slides itemes={this.state.slides} />
            <Categories categories={this.state.activeCategories} chooseCategory={this.chooseCategory} />
            <ProductsGrid
                products={this.state.activeProducts}
                categories={this.state.categories}
                onAdd={this.addToCart}
            />
            <Footer />
        </div>
    )
}
