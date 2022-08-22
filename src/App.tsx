import Header from "./components/Header";
import ProductsContainer from "./components/ProductsContainer";
import GlobalStyle from "./globalStyle";
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from "react";
import Cart from "./components/Cart";
import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store'
import Footer from "./components/Footer";

function App() {

  const [theme, setTheme] = useState('light')
  const [showCart, setShowCart] = useState(false)

  return (
    <Provider store={store}>
    <GlobalStyle theme={theme}/>
    <SkeletonTheme baseColor="var(--grey-1)" highlightColor="var(--white-1)">
    <Header showCart={showCart} setShowCart={setShowCart} theme={theme} setTheme={setTheme}/>
    <Cart showCart={showCart} setShowCart={setShowCart} />
    <ProductsContainer/>
    <Footer/>
    </SkeletonTheme>
    </Provider>
  );
}

export default App;
