import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Categories = () => {
  const [newData, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className='flex p-4 text-[12px]'>
        <Link to='/' className='text-green-500'>
          Home -
        </Link>
        <p> Categories ({newData.length})</p>
      </div>

      <ul className='p-6'>
        {newData.length > 0 ? (
          newData.map((item, index) => (
            <li key={index} className='bg-green-100 text-black mt-2 p-2'>
              <NavLink to={`/category/${item}`}>{item}</NavLink>
            </li>
          ))
        ) : (
          <li>No categories available</li>
        )}
      </ul>
    </div>
  );
};

export default Categories;
