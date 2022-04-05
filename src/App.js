import "./index.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListProducts from "./pages/ListProducts";
import CreateProduct from "./CreateProduct";
import ViewProductDetails from "./pages/ViewProductDetails";

import { products } from "./data";


class App extends Component {
  state = {
    products: products,
  };
  render() {
    return (
      <BrowserRouter >
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ListProducts  products={this.state.products} />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/products/:id" element={<ViewProductDetails products={this.state.products}/>} />
          </Routes>
        </main>
        <Footer />
      
      </BrowserRouter>
    );
  }
}

export default App;
