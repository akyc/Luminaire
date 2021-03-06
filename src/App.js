import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './routes/about';
import Home from './routes/home';
import Catalog from './routes/catalog';
import Product from './routes/product';
import Contacts from './routes/contacts';
import { getProducts } from './data/products';
import { getSlides } from './data/slides';
import { getCategories } from './data/categories';
import { getBrands } from './data/brands';

import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      slides: getSlides(),
      categories: getCategories(),
      brands: getBrands(),
      products: getProducts(),
      activeCategories: [],
      activeProducts: getProducts(),
      selectedCategory: 0
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromeCart = this.removeFromeCart.bind(this)
    this.getActiveCategories = this.getActiveCategories.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  componentWillMount() {
    this.getActiveCategories()
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home state={this.state} addToCart={this.addToCart} removeFromeCart={this.removeFromeCart} chooseCategory={this.chooseCategory} />} />
          <Route path="/about" element={<About state={this.state} addToCart={this.addToCart} removeFromeCart={this.removeFromeCart} />} />
          <Route path="/catalog" element={<Catalog state={this.state} addToCart={this.addToCart} removeFromeCart={this.removeFromeCart} chooseCategory={this.chooseCategory} />} />
          <Route path="/catalog/:productId" element={<Product state={this.state} addToCart={this.addToCart} removeFromeCart={this.removeFromeCart} />} />
          <Route path="/contacts" element={<Contacts state={this.state} addToCart={this.addToCart} removeFromeCart={this.removeFromeCart} />} />

        </Routes>
      </BrowserRouter>
    );
  }
  addToCart(product) {
    //this.setState({ cart: [...this.state.cart, product] })
    let nCart = [...this.state.cart]
    if (nCart.some(el => el.product.id === product.id)) {
      nCart.map((el) => {
        if (el.product.id === product.id) {
          return el.count++
        }
        return el
      })
    } else {
      nCart.push({ count: 1, product })
    }
    this.setState({ cart: nCart })
  }
  removeFromeCart(productId) {
    this.setState({ cart: this.state.cart.filter(el => el.product.id !== productId) })
  }
  getActiveCategories() {
    let catsList = [...this.state.activeCategories]
    this.state.products.forEach(product => {
      let cat = [...this.state.categories];
      if (!catsList.find(category => category.id === product.category)) {
        catsList.push(cat.find(c => c.id === product.category))
      }
    })
    this.setState({ activeCategories: [...catsList] });
  }
  chooseCategory(categoryId) {
    if (categoryId === 0) {
      this.setState({ activeProducts: [...this.state.products] })
    } else {
      this.setState({ activeProducts: this.state.products.filter(el => el.category === categoryId) })
    }
    this.setState({ selectedCategory: categoryId })
  }
}
