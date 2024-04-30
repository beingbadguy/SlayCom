import { Link, useParams } from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const CategoryProduct = () => {
  const { category } = useParams();
  // console.log(category);

  const [catData, setCatData] = useState([]);
  const [catDatas, setCatDatas] = useState([]);
  const [view, setview] = useState(-1);

  const fetchCategoryProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${category}`);

      const data = await response.json();
      // console.log(data);
      setCatData(data);
      setCatDatas(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCategoryProduct();
  }, []);
  console.log(catData);

  return (
    <div>
      <Header />
      <Menu />
      <div className='flex p-6'>
        <Link to='/' className='text-green-500  text-[12px]'>
           Home
        </Link>
        
        <Link to='/categories' className='text-green-500 text-[12px] '>
          - Categories
        </Link>
      <h1 className=' text-[12px]'> - Products ({catData.limit})</h1>
      </div>

      <div className='flex flex-wrap justify-center '>
        {catDatas.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6 h-[470px] w-[300px]  '
            onMouseOver={() => {
              setview(index);
            }}
            onMouseOut={() => {
              setview(-1);
            }}
          >
            <img
              src={`${item.thumbnail}`}
              className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
              alt=''
            />
            <div className='flex items-center justify-between w-[285px]'>
              <p className='font-semibold text-xl p-1'>{item.title}</p>

              <div></div>
            </div>
            <div className='flex items-center justify-between  w-[280px]'>
              <p id='price' className='italic p-1'>
                ${item.price}
              </p>
              <div>
                <FaHeart />
              </div>
            </div>
            <div className='flex justify-center items-center w-[100%]'>
              {/* <p className=' cursor-pointer text-center mx-auto m-3  w-20 bg-green-200'>
                    Add to cart
                  </p> */}
              <Link
                key={item.id}
                to={`/${item.id}`}
                className={`cursor-pointer text-center mx-auto m-3 w-[90%] rounded p-1 bg-black text-white ${
                  view === index ? 'block md:block ' : 'block md:hidden'
                } transition-all`}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default CategoryProduct;
