import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import { useParams } from 'react-router-dom';

const Categories = () => {
  const [newdata, setData] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');

      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);
  console.log(newdata);

  return (
    <div>
      <div className='flex p-4 text-[12px]'>
        <Link to='/' className=' text-green-500'>
          Home -{' '}
        </Link>
        <p> Categories ({newdata.length})</p>
      </div>

      <ul className='p-6'>
        {newdata.map((item, index) => (
          <li key={index} type='disc' className='bg-green-100 text-black mt-2 p-2'>
            <NavLink to={`/category/${item}`}>{item}</NavLink>
          </li>
        ))}
      </ul>
      {/* <Products /> */}
    </div>
  );
};
export default Categories;
