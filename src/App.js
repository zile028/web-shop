import db from "./products";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Assets/style/style.scss";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import Shop from "./Pages/Shop/Shop";
import Products from "./Pages/Products/Products";
import Article from "./Pages/Single/Article";
import Cart from "./Pages/Cart/Cart";
export const productContext = React.createContext();
export const cartContext = React.createContext();
export const addCartContext = React.createContext();

const test = [
  {
    id: 3,
    quantity: "2",
    article: {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
  },
  {
    id: 1,
    quantity: "2",
    article: {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
  },
  {
    id: 9,
    quantity: "3",
    article: {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(test);

  function addCart(data) {
    setCart([...cart, data]);
  }
  useEffect(() => {
    setProducts(db);
    return () => {};
  }, []);

  console.log(cart);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Navigation cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <productContext.Provider value={products}>
              <Home />
            </productContext.Provider>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/products"
          element={
            <productContext.Provider value={products}>
              <Products />
            </productContext.Provider>
          }
        />

        <Route
          path="/products/:id"
          element={
            <productContext.Provider value={products}>
              <addCartContext.Provider value={addCart}>
                <Article />
              </addCartContext.Provider>
            </productContext.Provider>
          }
        />

        <Route
          path="/cart"
          element={
            <cartContext.Provider value={cart}>
              <Cart />
            </cartContext.Provider>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
