import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
const Layout = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Layout;
