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

  // const Pro = {[
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 200,
  //     // status: false,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 560,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 207,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 208,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 876,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 690,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 200,
  //   },
  //   {
  //     image:
  //       'https://plus.unsplash.com/premium_photo-1693011409963-5b303d112c42?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 987,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 4387,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1530630458144-014709e10016?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 786,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 809,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1591254674198-a316f1aa8301?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 657,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1592842312573-dca0b185d2e0?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 907,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1619153709175-64db4b9f5ed5?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 543,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1588186939549-c087e0796efd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 432,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 199,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 937,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 566,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1556228578-dd539282b964?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 567,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 6587,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1620917669809-1af0497965de?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 9786,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1587304431932-58c06b6e9958?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 841,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1536992266094-82847e1fd431?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 878,
  //   },
  //   {
  //     image:
  //       'https://images.unsplash.com/photo-1587304883270-ccb401631f96?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     price: 977,
  //   },
  // ]}

  // const [products, setProducts] = useState([]);

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      const data = await response.json();
      // console.log(data);

      setitems(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(items);

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
