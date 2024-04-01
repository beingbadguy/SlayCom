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

function App() {
  // const menuList = useContext(menuContext);
  return (
    <div className='select-none mb-10'>
      <Header />
      <Menu />
      <Hero />
      <Categories />
      <TimerSlider />
      <Products />
      <Company />
      <Slider />
      <Testimonials />
    </div>
  );
}

export default App;
