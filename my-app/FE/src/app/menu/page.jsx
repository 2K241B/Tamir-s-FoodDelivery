'use client';
import { useState, useEffect } from 'react';
import { axiosInstance } from '@/lib/axios';
import { groupBy } from 'lodash';
import Image from 'next/image';
import foodImage from '@/components/assets/1.png';

const Page = () => {
  const [foods, setFoods] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('breakfast'); 

  const filters = ['breakfast', 'soup', 'main course', 'dessert']; 

  const getFoods = async () => {
    try {
      const { data } = await axiosInstance.get('/food/get');
      const groupedData = groupBy(data, food => food.category.toLowerCase()); 
      setFoods(groupedData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <main className="p-4 w-[1200px] m-auto">
      <div className="flex space-x-4 mb-6 ">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedCategory(filter)} 
            className={`px-4 w-[249px] py-2 rounded-lg ${selectedCategory === filter ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)} 
          </button>
        ))}
      </div>

      {foods[selectedCategory] && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods[selectedCategory].map((food) => {
            const originalPrice = parseFloat(food.price);
            const discountAmount = food.discount;
            const discountedPrice = originalPrice - (originalPrice * (discountAmount / 100));

            return (
              <div key={food._id} className="rounded-lg p-4 ">
                <Image
                  src={foodImage}
                  alt={food.name}
                  width={290}
                  height={160}
                  className="w-full h-40 object-cover rounded-md "
                />
                <h3 className="text-xl font-medium mb-2 ml-2">{food.name}</h3>
                <p className='ml-2 text-xl text-green-600'>
                  {food.discount > 0 ? (
                    <>
                      <span className='text-green-600'>{discountedPrice.toFixed(0)}₮</span>
                      <span className='ml-2 text-black line-through'>{originalPrice.toFixed(0)}₮</span>
                    </>
                  ) : (
                    `${originalPrice.toFixed(0)}₮`
                  )}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Page;
