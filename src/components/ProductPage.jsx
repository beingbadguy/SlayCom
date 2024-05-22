import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { CiHeart } from 'react-icons/ci';FaHeart
import { FaHeart } from 'react-icons/fa';
import { menuContext } from '../context/Context';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [image, setImage] = useState([]);
  const [itemNumber, setitemNumber] = useState(1);
  const [heart, setHeart] = useState(true);
  const [imgurl, setImgurl] = useState();
  const { wishlist, setWishlist } = useContext(menuContext);
  console.log(wishlist);

  const decrement = () => {
    itemNumber == 0 ? null : setitemNumber(itemNumber - 1);
  };
  const increment = () => {
    itemNumber == product?.stock ? null : setitemNumber(itemNumber + 1);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();

        setProduct(data);
        setImage(data.images);
      } catch (error) {}
    };

    fetchProduct();
  }, [id, imgurl]);

  return (
    <div className='select-none'>
      <ol className='flex gap-2 m-10 text-[12px]  '>
        <Link to='/' className=' text-green-500'>
          Home
        </Link>
        /
        <Link to={`/category/${product?.category}`} className=' text-green-500'>
          {product?.category}
        </Link>
        /<li className='font-bold hidden md:block'>{product?.brand} / </li>
        <li className='font-bold'>{product?.title}</li>
      </ol>

      <div className=' flex flex-col md:flex-row md:pt-[10px] justify-center items-left md:gap-10   md:mx-10'>
        <div className=' md:p-10 w-[100%] md:w-[50%] flex flex-col items-center justify-center '>
          <img
            src={imgurl ? imgurl : product?.thumbnail}
            className='h-[200px] w-[200px] md:h-[400px] md:w-[300px]'
            alt=''
          />
          <div className='flex  flex-wrap items-center justify-center gap-11  pt-10'>
            {image.map((pic, index) => (
              <img
                src={pic}
                key={index}
                className='h-20 w-16 cursor-pointer'
                onClick={() => {
                  setImgurl(pic);
                }}
              />
            ))}
          </div>
        </div>
        <div className='  w-[100%] md:w-[50%] p-10 flex flex-col gap-2'>
          <h1 className='text-2xl font-bold mt-2'>{product?.title}</h1>
          <p>{product?.description}</p>
          <div className='flex gap-2 mt-4'>
            <p className='font-bold'> ${product?.price}</p>
            <span className='line-through'> ${product?.discountPercentage}</span>
          </div>
          <p>Stock - {product?.stock}</p>
          <p>Brand - {product?.brand}</p>
          <p>Rating - {product?.rating}</p>
          <div className='flex gap-10 pt-20'>
            <div className='flex gap-1 bg-slate-200'>
              <div
                className=' font-bold flex items-center justify-center p-1 w-10 cursor-pointer'
                onClick={() => {
                  decrement();
                }}
              >
                -
              </div>
              <input
                type='number'
                name=''
                id=''
                value={itemNumber}
                className='outline-none p-1 w-11 text-center font-bold cursor-pointer'
                disabled
                placeholder='1'
              />
              <div
                className='font-bold flex items-center justify-center p-1 w-10 cursor-pointer'
                onClick={() => {
                  increment();
                }}
              >
                +
              </div>
            </div>
            <div
              className='bg-white w-full rounded text-center  border border-black p-2  transition-all cursor-pointer flex gap-2 items-center justify-center '
              onClick={() => {
                let itemexits = wishlist.some((item) => item.id === product.id);

                if (!itemexits) {
                  setWishlist([
                    ...wishlist,
                    {
                      ...product,
                      itemNumber: itemNumber,
                      totalPrice: itemNumber * (product?.price || 0),
                    },
                  ]);
                  console.log(wishlist);
                }
              }}
            >
              <p className='text-black'>
                {product && wishlist.some((item) => item?.id === product.id)
                  ? 'Added to wishlist'
                  : 'Add to wishlist'}
              </p>
            </div>
          </div>
          <p className='bg-black p-2 text-white text-center rounded hover:bg-white hover:text-black transition-all cursor-pointer mt-2  '>
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
