import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './routes/about';
import Home from './routes/home';
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
      activeProducts: [],
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeFromeCart = this.removeFromeCart.bind(this)
    this.getActiveCategories = this.getActiveCategories.bind(this)
    this.getActiveProducts = this.getActiveProducts.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.activeCategories = this.getActiveCategories()
    this.activeProducts = this.getActiveProducts()
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home state={this.state} />}>
            <Route path="about" element={<About state={this.state} />} />
          </Route>
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
    this.state.products.forEach(el => {
      let cat = [...this.state.categories],
        accat = [...this.state.activeCategories]
      if (!accat.filter(ac => ac.id === el.category).length) {
        this.state.activeCategories = [...this.state.activeCategories, cat.filter(c => c.id === el.category)[0]]

      }
    })
  }
  chooseCategory(categoryId) {
    if (categoryId === 0) {
      this.setState({ activeProducts: [...this.state.products] })
    } else {
      this.setState({ activeProducts: this.state.products.filter(el => el.category === categoryId) })
    }
  }
  getActiveProducts() {
    this.state.activeProducts = [...this.state.products]
  }
}
