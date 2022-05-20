// import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Slides from './components/Slides';
import ProductsGrid from './components/ProductsGrid';
import Footer from './components/Footer';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      slides: [
        {
          img: './img/slider/1.png',
          title: 'Новинка весна 2022',
          subtitle: ''
        },
        {
          img: './img/slider/2.png',
          title: 'Новая колексция светильников',
          subtitle: ''
        },
        {
          img: './img/slider/3.png',
          title: 'Новая колексция светильников',
          subtitle: ''
        },
        {
          img: './img/slider/4.png',
          title: 'Новая колексция светильников',
          subtitle: ''
        },
      ],
      categories: [
        {
          id: 1,
          name: 'Освещение для дома',
          parent: 0,
        },
        {
          id: 2,
          name: 'Уличные светильники',
          parent: 0,
        },
        {
          id: 6,
          name: 'Люстры',
          parent: 1,
        },
        {
          id: 7,
          name: 'Подвесные светильники',
          parent: 1,
        },
        {
          id: 8,
          name: 'Архитектурная подсветка',
          parent: 2,
        },
        {
          id: 9,
          name: 'Уличные фонари',
          parent: 2,
        },
      ],
      brands: [
        {
          id: 1,
          name: 'Eurosvet',
        },
        {
          id: 2,
          name: 'Bogate\'s',
        },
        {
          id: 3,
          name: 'TK Lightning',
        },
        {
          id: 4,
          name: 'Elektrostandard',
        }
      ],
      products: [
        {
          id: 1,
          article: 'a058078',
          brand: 1,
          name: 'Потолочная люстра',
          img: 'https://cdn.minimir.ru/images/catalog/1a058078_0001.jpg',
          price: 66431,
          category: 6,
        },
        {
          id: 2,
          article: 'a058347',
          brand: 2,
          name: 'Подвесная люстра',
          img: 'https://cdn.minimir.ru/images/catalog/1a058347_0002.jpg',
          price: 41900,
          category: 6,
        },
        {
          id: 3,
          article: 'a059886',
          brand: 3,
          name: 'Подвесная люстра',
          img: 'https://cdn.minimir.ru/images/catalog/1a059886_0001.jpg',
          price: 10400,
          category: 7,
        },
        {
          id: 4,
          article: 'a055632',
          brand: 4,
          name: 'Ландшафтный светильник Roil',
          img: 'https://cdn.minimir.ru/images/catalog/1a055632_0001.jpg',
          price: 4510,
          category: 9,
        },
        {
          id: 5,
          article: 'a051822',
          brand: 4,
          name: 'Пылевлагозащищенный светодиодный светильник Белый IP54',
          img: 'https://cdn.minimir.ru/images/catalog/1a051822_0004.jpg',
          price: 6930,
          category: 8,
        },
      ],
    }
    this.addToCart = this.addToCart.bind(this)
  }
  render() {
    return (<div className="app">
      <Header cart={this.state.cart} />
      <Slides itemes={this.state.slides} />
      <ProductsGrid
        products={this.state.products}
        categories={this.state.categories}
        onAdd={this.addToCart}
      />
      <Footer />
    </div>
    );
  }
  addToCart(product) {
    this.setState({ cart: [...this.state.cart, product] })
    console.log('addToCart: ', product, this.state.cart)
  }
}

export default App;
