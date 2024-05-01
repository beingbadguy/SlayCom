import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ContextProvider } from './context/Context.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Categories from './components/Categories/Categories.jsx';
import ProductPage from './components/ProductPage.jsx';
import Sign from './components/Sign.jsx';
import Login from './components/Login.jsx';
import CategoryProduct from './components/CategoryProduct.jsx';
import Layout from './layout/Layout.jsx';
import SearchProduct from './components/SearchProduct.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <App />,
      },
      {
        path: '/:id',
        element: <ProductPage />,
      },

      {
        path: '/categories',
        element: <Categories />,
      },

      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/sign',
        element: <Sign />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/category/:category',
    element: <CategoryProduct />,
  },
  {
    path: '/search',
    element: <SearchProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
