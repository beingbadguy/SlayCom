import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [view, setview] = useState(-1);

  const { id } = useParams();

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  console.log(view);

  return (
    <div>
      <h1 className='font-bold bg-red-100 text-center p-2'>Products</h1>
      <div>
        <div className='flex flex-wrap justify-center gap-5  m-6  p-1  text-[14px] '>
          {products &&
            products.map((item, index) => (
              <div
                key={index}
                className=' relative p-2 bg-zinc-100 rounded flex flex-col items-start h-[310px] w-[250px] cursor-pointer overflow-hidden'
                onMouseOver={() => {
                  setview(index);
                }}
                onMouseOut={() => {
                  setview(-1);
                }}
              >
                <img src={item.thumbnail} className='h-[200px] w-[250px]' alt='' />
                <h1 className='font-bold'>{item.title}</h1>
                <p className='font-bold text-start italic text-slate-600  text-[12px]'>
                  {'$' + item.price}
                </p>
                <div className='flex justify-between w-[100%]'>
                  {/* <p className=' cursor-pointer text-center mx-auto m-3  w-20 bg-green-200'>
                    Add to cart
                  </p> */}
                  <Link
                    key={item.id}
                    to={`/${item.id}`}
                    className={`cursor-pointer text-center mx-auto m-3 w-[100%] rounded p-1 bg-black text-white ${
                      view === index ? 'block ' : 'hidden'
                    } transition-all`}
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
