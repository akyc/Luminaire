import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';

export default function About(props) {
    return (
        <div>
            <Header cart={props.state.cart} onRemove={this.removeFromeCart} />
            <Footer />
        </div>
    )
}
