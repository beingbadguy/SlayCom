import React from 'react';

const Products = () => {
  let arr = [
    {
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2599&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://plus.unsplash.com/premium_photo-1693011409963-5b303d112c42?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1610824352934-c10d87b700cc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1530630458144-014709e10016?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1591254674198-a316f1aa8301?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1592842312573-dca0b185d2e0?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1619153709175-64db4b9f5ed5?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1588186939549-c087e0796efd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1615281612781-4b972bd4e3fe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1556228578-dd539282b964?q=80&w=2511&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1620917669809-1af0497965de?q=80&w=2549&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1587304431932-58c06b6e9958?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1536992266094-82847e1fd431?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      image:
        'https://images.unsplash.com/photo-1587304883270-ccb401631f96?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  let newArr = [];
  let updatedArr = arr.map((item, index) => {
    return (newArr = {
      ...item,
      id: index,
      name: `Product-${index}`,
      price: `$${Math.floor(Math.random() * 100 + 1)}`,
    });
  });

  return (
    <>
      <h1 className=' ml-14 sm:ml-16 mb-2'>New Arrivals</h1>
      <div className='flex flex-wrap justify-center '>
        {updatedArr.map((item, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-xl flex flex-col flex-wrap items-start  m-6  '
          >
            <img
              src={`${item.image}`}
              className=' rounded-xl p-1 border w-[300px]  h-[300px] object-cover cursor-pointer'
              alt=''
            />
            <p className='font-semibold text-xl p-1'>{item.name}</p>
            <p id='price' className='italic p-1'>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Products;
