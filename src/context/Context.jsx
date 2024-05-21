import { useState, createContext, useEffect } from 'react';
import React from 'react';

export const menuContext = createContext();

export const ContextProvider = (props) => {
  const [menuStatus, setmenuStatus] = useState(true);
  const [homeStatus, sethomeStatus] = useState(true);
  const [wishStatus, setwishStatus] = useState(true);
  const [cartStatus, setcartStatus] = useState(true);
  const [items, setitems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      const data = await response.json();

      setitems(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <menuContext.Provider
      value={{
        menuStatus,
        setmenuStatus,
        homeStatus,
        sethomeStatus,
        items,
        setitems,
        wishStatus,
        setwishStatus,
        cartStatus,
        setcartStatus,
        wishlist,
        setWishlist,
      }}
    >
      {props.children}
    </menuContext.Provider>
  );
};
