import './App.css';
import Products from './components/Products';
import Header from './components/Header';
import Menu from './components/Menu';
import { useContext } from 'react';
import { menuContext } from './context/Context';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Slider from './components/Slider';
import Company from './components/Company';
import TimerSlider from './components/TimerSlider';
import Testimonials from './components/Testimonials';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import React from 'react';

function App() {
  const mainContext = useContext(menuContext);
  // console.log(mainContext.wishStatus, mainContext.menuStatus);
  return (
    <div
      className={`select-none ${mainContext.wishStatus ? 'h-[99vh]' : 'h-auto'} ${
        mainContext.menuStatus ? 'h-[99vh]' : 'h-auto'
      } `}
    >
      <Header />
      <Menu />
      <Hero />
      <Categories />
      <TimerSlider />
      <Products />
      <Company />
      <Slider />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
